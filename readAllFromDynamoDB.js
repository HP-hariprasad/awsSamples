var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var params = {
  TableName: "CUSTOMER_LIST",
};
ddb.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
    data.Items.forEach(function (element, index, array) {
      console.log(element.CUSTOMER_ID.N + " (" + element.CUSTOMER_NAME.S + ")");
    });
  }
});
