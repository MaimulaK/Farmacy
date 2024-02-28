const router = require('express').Router();

// views
const mainRouter = require('./views/main.view.router');
const cartViewRouter = require('./views/cart.view.router');

// route views
router.use('/', mainRouter);
router.use('/cart', cartViewRouter)

module.exports = router;
