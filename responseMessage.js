module.exports.responseMessage = (statusCode, body) => {
  body = JSON.stringify(body, null, 2);
  return {
    statusCode,
    body
  };
};
