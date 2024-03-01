const router = require('express').Router();
const { CartItem, Cart } = require('../../db/models');
const CartItemJsx = require('../../components/CartItem');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    console.log("id", id);
    const { user } = res.locals;
    console.log(user);
    const cart = await Cart.findOrCreate({ where:{ userId: user.id} });
    if (cart) {
      let cartItem = CartItem.findOne({ where:{userId: user.id, productId: id } });
      if (cartItem) {
        const result = cartItem.update({ count: cartItem + 1 }, { cartItem });
        if (result) {
          cartItem = CartItem.findOne({ where: cartItem.id });
          const html = res.renderComponent(CartItemJsx, {}, { doctype: false });
          res.status(201).json({ message: 'success', html });
        }
      }
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;