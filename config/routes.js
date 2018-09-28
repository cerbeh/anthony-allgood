const router = require('express').Router();
const auth = require('../controllers/auth');
const credits = require('../controllers/credits');
const imgur = require('../controllers/imgur');

router.post('/createcredit', credits.create);

router.get('/workingcredits', credits.index);

router.get('/gallerylist', imgur.index);

//Left commented out whilst optimising layout on front end. route might not be nescessary
// router.get('/workingcredits/:id', credits.show);

router.get('/users', auth.index);

router.post('/login', auth.login);

module.exports = router;
