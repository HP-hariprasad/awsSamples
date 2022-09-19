var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var credentials = new AWS.SharedIniFileCredentials({ profile: "Jenkins" });
AWS.config.credentials = credentials;
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var params = {
  RequestItems: {
    CUSTOMER_LIST: [
      {
        PutRequest: {
          Item: {
            CUSTOMER_ID: { N: "001" },
            CUSTOMER_NAME: { S: "Hariprasad7" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            CUSTOMER_ID: { N: "003" },
            CUSTOMER_NAME: { S: "Hariprasad3" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            CUSTOMER_ID: { N: "003" },
            CUSTOMER_NAME: { S: "Hariprasad4" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            CUSTOMER_ID: { N: "003" },
            CUSTOMER_NAME: { S: "Hariprasad5" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            CUSTOMER_ID: { N: "003" },
            CUSTOMER_NAME: { S: "Hariprasad6" },
          },
        },
      },
    ],
  },
};
ddb.batchWriteItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
