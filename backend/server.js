const express = require('express'),
  app = express(),
  request = require('request-promise'),
  apicache = require('apicache'),
  cache = apicache.middleware,
  bodyParser = require('body-parser'),
  Promise = require('bluebird'),
  mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(`${__dirname}/../dist`));

// CORS settings
// app.all('*', require('./cors.js')());

app.get('/api/pokemon/list', cache('2 hours'), (req, res, next) => {
  let options = {
    uri: `http://pokeapi.co/api/v2/pokemon/?offset=${req.query.offset || 0}`,
    method: 'GET',
    json: true
  };

  request(options).then(data => {
    res.json(data);
  })
  .catch(error => next(error));
});

app.get('/api/pokemon/:id', cache('2 hours'), (req, res, next) => {
  let optionsPokemon = {
    uri: `http://pokeapi.co/api/v2/pokemon/${req.params.id}`,
    method: 'GET',
    json: true
  };

  let result;

  request(optionsPokemon).then(data => {
    result = {
      status: data.stats.map(item => {
        return { statusName: item.stat.name, statusBase: item.base_stat };
      }),
      image: data.sprites.front_default
    };

    let optionsSpecies = {
      uri: `http://pokeapi.co/api/v2/pokemon-species/${req.params.id}`,
      method: 'GET',
      json: true
    };

    return request(optionsSpecies);
  })
  .then(data => {
    result.description = data.flavor_text_entries[1].flavor_text;
    res.json(result);
  })
  .catch(error => next(error));
});

require('./comment/comment.router')(app);

// Error handiling
require('./error-handler.js')(app);

app.listen(process.env.PORT || 80, () => {
  console.log('Service started');
});
