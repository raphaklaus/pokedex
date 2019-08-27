const Comment = require('./comment.model');

module.exports = (app) => {
  app.post('/api/comment', (req, res, next) => {
    new Comment(req.body).save().then(result => {
      res.json(result);
    }).catch(error => next(error));
  });

  app.get('/api/comments/:id', (req, res, next) => {
    Comment.find({ pokemon: req.params.id }).then(result => {
      res.json(result);
    }).catch(error => next(error));
  });
};
