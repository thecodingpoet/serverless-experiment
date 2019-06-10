'use strict';

module.exports.hello = async (event) => {
  const location = event.pathParameters && event.pathParameters.location

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${location}`
    }, null, 2),
  }  
};

module.exports.greet = async (event) => {
  const name = event.queryStringParameters && event.queryStringParameters.name || "world!"

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}`
    }, null, 2)
  }
};
