const axios = require('axios');

function indexRoute(req, res, next) {
  axios({
    method: 'GET',
    url: 'https://api.imgur.com/3/account/cerbeh/albums',
    json: true
    // headers: { Authorization: 'Client-ID 7993a6868066306'}
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute
};
