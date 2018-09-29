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
          company: 'Warner Bros'
        },{
          title: 'Hereafter',
          discipline: 'Film',
          character: 'The Visitor',
          company: 'GT Films Inc',
          director: 'Clint Eastwood'
        },{
          title: 'NHS Values Film - Wrexham Park Hospital',
          discipline: 'Film',
          character: 'Tim Dry',
          company: 'The Giggle Group',
          director: 'Geoff Trodd'
        },{
          title: 'Uncut',
          discipline: 'Film',
          character: 'Dad',
          company: 'Greenacre Film',
          director: 'Philip West'
        },{
          title: 'Closer',
          discipline: 'Commercial',
          character: 'Customer',
          company: 'Outsider Tv',
          director: 'Jorn Threlfall'
        },{
          title: 'Amore',
          discipline: 'Musical',
          character: 'Lead Male Vocalist (Rat Pack, Sinatra/Martin)',
          company: 'SG Productions',
          director: 'Simon Gross'
        },{
          title: 'Hooray for Mr Toad',
          discipline: 'Musical',
          character: 'Badger',
          company: 'Quintissentially British Theatre Company',
          director: 'Bart Lee'
        },{
          title: 'All\'s Well That Ends Well',
          discipline: 'Stage',
          character: 'General Dumain',
          company: 'Berkshire Shakespeare Festival',
          director: 'Bart Lee'
        },{
          title: 'Dangerous Distractions',
          discipline: 'Stage',
          character: 'Professor Brian',
          company: 'Casting Light Productions',
          director: 'Laura Dymock'
        },{
          title: 'Britains Got Tudors',
          discipline: 'Stage',
          character: 'Henry VIII',
          company: 'Casting Light Productions',
          director: 'Laura Dymock'
        },{
          title: 'The Winter\'s Tale',
          discipline: 'Stage',
          character: 'Leontes',
          company: 'The People\'s Theatre',
          director: 'Diane Jesse-Miller'
        },{
          title: 'Subtle Madness',
          discipline: 'Stage',
          character: 'Harold',
          company: 'The People\'s Theatre',
          director: 'Diane Jesse-Miller'
        },{
          title: 'The Merry Wives of Windsor',
          discipline: 'Stage',
          character: 'The Host',
          company: 'Progress Theatre',
          director: ''
        },{
          title: 'Bums On Seats',
          discipline: 'Stage',
          character: 'Roland Luckett',
          company: 'The Windsor Globe',
          director: 'Bart Lee'
        },{
          title: 'Generl Election by Bethany Sharp',
          discipline: 'Stage',
          character: 'Alan',
          company: 'Part of Sunday Surgey (MSFT)',
          director: 'Evi Stamatiou'
        },{
          title: 'What Would Baron Booby Say by Penelope Machlachlan',
          discipline: 'Stage',
          character: 'Kevin',
          company: 'Part of Sunday Surgery (MSFT)',
          director: 'Laurie Sherry'
        },{
          title: 'The Tempest',
          discipline: 'Stage',
          character: 'Antonio',
          company: 'South Hill Park',
          director: 'Bart Lee'
        },{
          title: 'Hamlet',
          discipline: 'Stage',
          character: 'Ghost / Player King',
          company: 'Another Way Theatre',
          director: 'Chris Chambers'
        },{
          title: 'Dick Whittington',
          discipline: 'Pantomime',
          character: 'Sarah (Dame)',
          company: 'SG Productions Ltd',
          director: 'Simon Gross'
        },{
          title: 'Beauty And The Beast',
          discipline: 'Pantomime',
          character: 'Belle\'s father/Ray Presto',
          company: 'Alligator Theatre Company',
          director: ''
        },{
          title: 'Robin Hood - A Very Merry Tale',
          discipline: 'Pantomime',
          character: 'Little John / Sheriff of Nottingham',
          company: 'Alligator Theatre Company',
          director: ''
        },{
          title: '',
          discipline: '',
          character: '',
          company: '',
          director: ''
        }
      ]
    }]))
    .then(user => console.log(`Created ${user}`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
