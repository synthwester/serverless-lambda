'use strict';

const faker = require('faker');
const { responseMessage } = require('./responseMessage');
const { firstNamedExport, secondNamedExport, fetchData } = require('./custom');

const run = () => {
  const firstNamedExportResult = firstNamedExport('some data');
  const secondNamedExportResult = secondNamedExport('another data');
  const defaultExportResult = defaultExport('default data');

  const result = `${firstNamedExportResult} ${secondNamedExportResult} ${defaultExportResult}`;
  console.log(firstNamedExportResult, secondNamedExportResult, defaultExportResult);

  return result;
};

module.exports.requestdata = async event => {
  let result;
  try {
    const request = new Object();
    request.paramId = event.pathParameters.id;
    request.requestBody = event.body;
    // console.log(requestBody);
    request.queryStringUsername = event.queryStringParameters.username;
    result = request;
  } catch (error) {
    result = error.message;
  }

  return responseMessage(200, { message: 'Some message', result });
};

module.exports.fetchsome = async event => {
  const { id } = event.pathParameters;
  if (!id) return responseMessage(400, 'Please provide id.');

  let result;
  try {
    result = await fetchData(id);
  } catch (error) {
    result = error.message;
  }
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: result
      },
      null,
      2
    )
  };
};

module.exports.hello = async event => {
  const runResult = run();
  return responseMessage(200, { message: 'Some message', result: runResult });
};
