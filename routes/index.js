const router = require('express').Router();

// views

const cartViewRouter = require('./views/cart.view.router');

// route views

router.use('/cart', cartViewRouter);

const mainViewRouter = require('./views/main.view.router');
const authViewRouter = require('./views/auth.view.router');

// api
const authApiRouter = require('./api/auth.api.router');
const productsApiRouter = require('./api/products.api.router');

// route views
router.use('/', mainViewRouter);
router.use('/auth/', authViewRouter);

// route api
router.use('/api/auth', authApiRouter);
router.use('/api/', productsApiRouter);

module.exports = router;
