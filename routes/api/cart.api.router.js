const router = require('express').Router();
const { Cart } = require('../../db/models');
const { CartItem } = require('../../db/models');
const ProductCard = require('../../components/ProductCard');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const { user } = res.locals;
    const cart = await Cart.findOrCreate({ where: user.id });
    if (cart) {
      let cartItem = CartItem.findOne({ where: user.id, productId: id });
      if (cartItem) {
        const result = cartItem.update({ count: cartItem + 1 }, { cartItem });
        if (result) {
          cartItem = CartItem.findOne({ where: cartItem.id });
          const html = res.renderComponent(ProductCard, {}, { doctype: false });
          res.json();
        }
      }
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
