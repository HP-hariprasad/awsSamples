var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var params = {
  TableName: "CUSTOMER_LIST",
  Item: { CUSTOMER_ID: { N: "001" }, CUSTOMER_NAME: { S: "Hariprasad" }},
};
ddb.putItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
