const router = require('express').Router();

// views
const mainViewRouter = require('./views/main.view.router');
const authViewRouter = require('./views/auth.view.router');

// api
const authApiRouter = require('./api/auth.api.router');

// route views
router.use('/', mainViewRouter);
router.use('/auth/', authViewRouter);

// route api
router.use('/api/auth', authApiRouter);

module.exports = router;
