const router = require('express').Router();
const auth = require('../controllers/auth');
const credits = require('../controllers/credits');

router.post('/createcredit', credits.create);

router.get('/workingcredits', credits.index);

router.get('/workingcredits/:id', credits.show);

router.get('/users', auth.index);

router.post('/login', auth.login);

module.exports = router;
