const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => User.create([{
      username: 'martin',
      email: 'martin@martin.com',
      password: 'martin',
      passwordConfirmation: 'martin'
    }]))
    .then(user => console.log(`Created ${user}`))
    .catch(err => console.log(err))
    .finally(() => mongoose.conection.close());
});
