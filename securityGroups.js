const dotenv = require('dotenv');
dotenv.config();
var AWS = require("aws-sdk");
console.log("access key",process.env.Access_key_ID)
// Set the region
AWS.config.update({ region: "us-east-1" });
// AWS.config.update({ Access_key_ID: process.env.Access_key_ID });
var credentials = new AWS.SharedIniFileCredentials({profile: 'Jenkins'});
AWS.config.credentials = credentials;
// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });
var params = { GroupIds: ["sg-03ddacfd5fa408195"] };
// Retrieve security group descriptions
ec2.describeSecurityGroups(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", JSON.stringify(data.SecurityGroups));
  }
});
