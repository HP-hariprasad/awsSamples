var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
lambda = new AWS.Lambda({ region: "us-east-1", apiVersion: "2015-03-31" });
var pullParams = {
  FunctionName: "testJenkins",
  InvocationType: "RequestResponse",
  LogType: "None",
};
lambda.invoke(pullParams, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
