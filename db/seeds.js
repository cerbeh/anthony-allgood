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
      passwordConfirmation: 'm',
      credits: [
        {
          title: 'Harry Potter and the Deathly Hallows',
          discipline: 'Film',
          character: 'Teffington (Gringots Guard)',
          company: 'Warner Bros',
          showData: false
        },{
          title: 'Hereafter',
          discipline: 'Film',
          character: 'The Visitor',
          company: 'GT Films Inc',
          director: 'Clint Eastwood',
          showData: false
        },{
          title: 'NHS Values Film - Wrexham Park Hospital',
          discipline: 'Film',
          character: 'Tim Dry',
          company: 'The Giggle Group',
          director: 'Geoff Trodd',
          showData: false
        },{
          title: 'Uncut',
          discipline: 'Film',
          character: 'Dad',
          company: 'Greenacre Film',
          director: 'Philip West',
          showData: false
        },{
          title: 'Closer',
          discipline: 'Commercial',
          character: 'Customer',
          company: 'Outsider Tv',
          director: 'Jorn Threlfall',
          showData: false
        }
      ]
    }]))
    .then(user => console.log(`Created ${user}`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
