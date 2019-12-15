'use strict';

const faker = require('faker');
const { firstNamedExport, secondNamedExport, fetchData } = require('./custom');

const run = () => {
  const firstNamedExportResult = firstNamedExport('some data');
  const secondNamedExportResult = secondNamedExport('another data');
  const defaultExportResult = defaultExport('default data');

  const result = `${firstNamedExportResult} ${secondNamedExportResult} ${defaultExportResult}`;
  console.log(firstNamedExportResult, secondNamedExportResult, defaultExportResult);

  return result;
};

module.exports.fetchSomeData = async event => {
  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

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

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: runResult
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
