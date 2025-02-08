const JSONSyntax = (err, req, res, next) => {
  if(err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({err: 'invalid json format'});
  }
  next(err);
};

module.exports = JSONSyntax;

/* in case of an invalid JSON format,
the middleware will return a 400 status code
with an error message */
