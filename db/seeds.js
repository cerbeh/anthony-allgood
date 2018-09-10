const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => User.create([{
      username: 'Martin',
      email: 'm@m.com',
      password: 'm',
      passwordConfirmation: 'm'
    }]))
    .then(user => console.log(`Created ${user}`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
