var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var params = {
  ExpressionAttributeValues: {
    ":s": { N: '3' }
    // ":e": { N: "09" },
    // ":topic": { S: "PHRASE" },
  },
  KeyConditionExpression: "CUSTOMER_ID = :s",
  ProjectionExpression: "CUSTOMER_ID, CUSTOMER_NAME",
//   FilterExpression: "contains (Subtitle, :topic)",
  TableName: "CUSTOMER_LIST",
};
ddb.query(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
    data.Items.forEach(function (element, index, array) {
      console.log(element.CUSTOMER_ID.N + " (" + element.CUSTOMER_NAME.S + ")");
    });
  }
});
