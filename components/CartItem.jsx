const React = require('react');

function CartItem({ item }) {
  console.log(item);
  return (
    <div className='cartProduct'>
      <h2>{item.Product.title}</h2>
      <img src={item.Product.img} />
      <h3>{item.Product.price} ₽</h3>
      <button className='btn-delete'>Удалить</button>
    </div>
  );
}

module.exports = CartItem;
