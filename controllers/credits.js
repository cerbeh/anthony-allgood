const User = require('../models/user');


//Data is hardcoded here but eventually the front end will be delivering data
// const data = '5ba12d4cb7bebdc9e039547f';


//Needs to possibly be adapted to work in a different way. Index route below is using req.body.data
function createRoute(req, res, next) {
  User.findById(req.body)
    .then(user => {
      user.credits.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}


function indexRoute(req, res, next) {
  User.findById(req.body.data)
    .then(user => res.json(user.credits))
    .catch(next);
}

module.exports = {
  create: createRoute,
  index: indexRoute
};
