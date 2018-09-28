const User = require('../models/user');


//Data is hardcoded here but eventually the front end will be delivering data
const data = '5bae227c9cc1ff670c7373d4';


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
  User.findById(data)
    .then(user => res.json(user.creditTypes))
    .catch(next);
}

function showRoute(req, res, next) {
  User.findById(data)
    .then(user => {
      const credits = user.creditTypes.filter(creditType => {
        return creditType.discipline === req.params.id;
      })[0];
      res.json(credits);
    })
    .catch(next);
}

module.exports = {
  create: createRoute,
  index: indexRoute,
  show: showRoute
};
