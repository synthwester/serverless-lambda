const axios = require('axios');

// This is default export function
module.exports = defaultExport = (firstName, lastName) => {
  return `Hello '${firstName} ${lastName}' from 'defaultExport'!`;
};

// This is named export function (preferred)
module.exports.firstNamedExport = data => {
  const result = `This is first named export: ${data}`;
  return result;
};

// This is named export function (preferred)
module.exports.secondNamedExport = data => {
  const result = `This is second named export: ${data}`;
  return result;
};

// This is async function
module.exports.fetchData = async id => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const result = await axios.get(url);
  return result.data;
};
