const router = require('express').Router();

// views

const cartViewRouter = require('./views/cart.view.router');

// route views

router.use('/cart', cartViewRouter);

const mainViewRouter = require('./views/main.view.router');
const authViewRouter = require('./views/auth.view.router');
const containerViewRouter = require('./views/container.view.router');

// api
const authApiRouter = require('./api/auth.api.router');

// route views
router.use('/', mainViewRouter);
router.use('/', containerViewRouter);
router.use('/auth/', authViewRouter);

// route api
router.use('/api/auth', authApiRouter);

module.exports = router;
