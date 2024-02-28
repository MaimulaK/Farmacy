const router = require('express').Router();

// views
const mainRouter = require('./views/main.view.router');

// route views
router.use('/', mainRouter);

module.exports = router;
