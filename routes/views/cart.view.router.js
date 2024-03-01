const router = require('express').Router();
const CartPage = require('../../components/CartPage');
const { Cart, CartItem, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    // const cart = await Cart.findOne(
    //   { where: { userId: user.id } },
    //   {
    //     include: [
    //       {
    //         model: CartItem,
    //         include: Product,
    //       },
    //     ],
    //   }
    // );
    // console.log(cart);

    const cart = await Cart.findOne({
      where: { userId: user.id },
      include: [{ model: CartItem, include: Product }],
    });
    res.send(res.renderComponent(CartPage, { title: 'Корзина', cart, user }));
  } catch ({ message }) {
    console.log(message, 2222222222222222222222222222222222222222222);
  }
});

module.exports = router;
