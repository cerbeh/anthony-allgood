const User = require('../models/user');
const user = '5ba12d4cb7bebdc9e039547f';

function createRoute(req, res, next) {
  //Need to find a different way of identifying the user as req.params.id wont exist. Could hard code the id as its intended to be a single user site anyways
  User.findById(user)
    .then(user => {
      user.credits.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}


function indexRoute(req, res, next) {
  User.findById(user)
    .then(user => res.json(user.credits))
    .catch(next);
}

module.exports = {
  create: createRoute,
  index: indexRoute
};
