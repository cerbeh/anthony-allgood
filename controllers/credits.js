const User = require('../models/user');

function createRoute(req, res, next) {
  const user = '5b967e3972ad7458c21b2b35';
  //Need to find a different way of identifying the user as req.params.id wont exist. Could hard code the id as its intended to be a single user site anyways
  User.findById(user)
    .then(user => {
      user.credits.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  create: createRoute
};
