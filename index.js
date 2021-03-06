const Atrium = require('mx-atrium');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const credentials = require('./credentials.json');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const AtriumClient = new Atrium.Client(credentials.apiKiey, credentials.clientId, Atrium.environments.development);

Atrium.endpoints.forEach(endpoint => {
  app[endpoint.method](endpoint.url, (request, response) => {
    AtriumClient[endpoint.clientMethod](request)
    .then(json => {
      response.json(json);
    });
  });
});

app.listen(3001);
