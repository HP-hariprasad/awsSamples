const dotenv = require("dotenv");
dotenv.config();
var AWS = require("aws-sdk");
console.log("access key", process.env.Access_key_ID);
// Set the region
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
var s3bucket = new AWS.S3({
  params: { Bucket: "aws-spring-boot-apps" },
  apiVersion: "2006-03-01",
});
s3bucket.getObject(
  { Bucket: "aws-spring-boot-apps", Key: "aws-spring-boot-exe.jar" },
  function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", JSON.stringify(data.LastModified));
    }
  }
);
