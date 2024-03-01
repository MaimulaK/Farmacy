const router = require('express').Router();
const CartPage = require('../../components/CartPage');
const { Cart, CartItem, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const cart = await Cart.findOne({
    where: { userId: user.id },
    include: [
      {
        model: CartItem,
        include: Product,
      },
    ],
  });
  res.send(res.renderComponent(CartPage, { title: 'Корзина', cart, user }));
});

module.exports = router;
