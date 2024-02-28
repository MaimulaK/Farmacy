const router = require('express').Router();
const CartPage = require('../../components/CartPage');

router.get('/', (req, res) => {
  res.send(res.renderComponent(CartPage, { title: 'Корзина' }));
});

module.exports = router;
