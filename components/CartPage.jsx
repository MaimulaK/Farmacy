const React = require('react');
const Layout = require('./Layout');
const CartItem = require('./CartItem');

function CartPage({ title, cart, user, cartItem }) {
  console.log(cart, '----------------------------------------------');
  return (
    <Layout title={title} user={user}>
      <div className='cartPageIm'>
        <h2>Корзина</h2>
        <h4>Вы выбрали:</h4>
        <div className='cart-container'>
          {cart.CartItems.map((item) => (
            <CartItem cartItem={cartItem} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = CartPage;
