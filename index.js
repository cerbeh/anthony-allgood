const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { port, dbURI } =  require('./config/environment');
const routes = require('./config/routes');

mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.Promise = require('bluebird');

app.use(bodyParser.json());
app.use('/api',routes);

app.listen(port, () => console.log('Up and running'));

module.exports = app;
