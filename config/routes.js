const router = require('express').Router();
const auth = require('../controllers/auth');
const credits = require('../controllers/credits');

router.post('/createcredit', credits.create);

router.post('/login', auth.login);

module.exports = router;
