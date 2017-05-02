module.exports = function(app) {
  app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(error.statusCode || 500).json({ error: { name: error.name,
            message: error.message || 'Oops! Something went wrong.' } });
  });
};
