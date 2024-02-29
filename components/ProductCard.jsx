const React = require('react');

function ProductCard({ product }) {
  return (
    <div className={`product-${product.count} productItem`} data-id={product.id}>
      <h2>{product.title}</h2>
      <img src={product.img} alt='' />
      <p>{product.price}</p>
      <p>{product.count}</p>
      <p>{product.description}</p>
      <button className='cardAdd'>Добавить</button>
    </div>
  );
}

module.exports = ProductCard;
