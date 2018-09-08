const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { port, dbURI } =  require('./config/environment');

mongoose.connect(dbURI, {useNewUrlParser: true});

app.listen(port, () => console.log('Up and running'));
