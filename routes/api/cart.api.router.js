const router = require('express').Router();
const { where } = require('sequelize');
const { CartItem, Cart } = require('../../db/models');
const CartItemJsx = require('../../components/CartItem');

router.post('/', async (req, res) => {
  try {
    // достали id продкута 
    const { id } = req.body;
    // дотсаем пользователя, который на сайте 
    const { user } = res.locals;
    // console.log(user, '--------------------------------------------');
    // создаем или проверяем корзину
    // ВАЖНО!!!! findOrCreate возвращает всегда массив
    const cart = await Cart.findOrCreate({ where: { userId: user.id } });
    // проверяем, есть ли корзина 
    if (cart[0]) {
      // елси есть то находим item 
      let cartItem = await CartItem.findOne({
        where: { cartId: cart[0].id, productId: id },
      });
      if (cartItem) {
        // если он есть, то обновляем count 
        const result = cartItem.update(
          { count: cartItem.count + 1 },
          { where: { id } }
        );
        if (result) {
          // если успешно обновили, находим актуальный item 
          cartItem = CartItem.findOne({ where: cartItem.id });
         
          // и отправляем
          res.status(201).json({ message: 'success' });
        }
      } else {
        // если товар попал в первые в корзину, то создаем его
        cartItem = await CartItem.create({ cartId: cart[0].id, productId: id });
        res.status(201).json({ message: 'success' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
