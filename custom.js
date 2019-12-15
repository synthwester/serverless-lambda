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
module.exports.fetchData = async url => {
  // Example URL: https://jsonplaceholder.typicode.com/posts/1
  const result = await fetch(url);
  const jsonFormatted = await result.json();
  return jsonFormatted;
};
