module.exports.requestHandler = (errors, isError, callback) => {
  if (isError) {
    const errorObject = errors.reduce((acc, error) => {
      acc[error.path] = error.msg;
      return acc;
    }, {});

    callback(errorObject);
  }
};
