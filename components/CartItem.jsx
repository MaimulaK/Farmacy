const React = require('react');

function CartItem({ item ,CartItem}) {
  console.log(item);
  return (
    <div className='cartProduct' data-id={item.Product.id}>
      <h2>{item.Product.title}</h2>
      <img src={item.Product.img} />
      <h3>{item.Product.price}</h3>
      {/* <h3>{CartItem.count}</h3> */}
      <button className='btn-delete'>Удалить</button>
    </div>
  );
}

module.exports = CartItem;
