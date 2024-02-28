const router = require('express').Router();

// views
const mainViewRouter = require('./views/main.view.router');
const registrationViewRouter = require('./views/auth.view.router');

// route views
router.use('/', mainViewRouter);
router.use('/auth/', registrationViewRouter);

module.exports = router;
