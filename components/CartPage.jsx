const React = require('react');
const Layout = require('./Layout');
const CartItem = require('./CartItem');

function CartPage({ title, products }) {
  return (
    <Layout title={title}>
      <h2>Корзина</h2>
      <h4>Вы выбрали:</h4>
      <div className='cart-container' />
    </Layout>
  );
}

module.exports = CartPage;
