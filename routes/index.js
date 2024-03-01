const router = require('express').Router();

// views

const cartViewRouter = require('./views/cart.view.router');

// route views

const mainViewRouter = require('./views/main.view.router');
const authViewRouter = require('./views/auth.view.router');
const personalViewRouter = require('./views/personal.view.router');
const productViewRouter = require('./views/product.view.router');

// api
const authApiRouter = require('./api/auth.api.router');
const productsApiRouter = require('./api/products.api.router');
const personalApiRouter = require('./api/personal.api.roter');

// route views
router.use('/', mainViewRouter);
router.use('/auth/', authViewRouter);
router.use('/cart', cartViewRouter);
router.use('/personal', personalViewRouter);
router.use('/product', productViewRouter);

// route api
router.use('/api/auth', authApiRouter);
router.use('/api/', productsApiRouter);
router.use('/api/personal', personalApiRouter);

module.exports = router;
