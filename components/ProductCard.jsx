const React = require('react');

function ProductCard({ product }) {
  return (
    <div
      className={`product-${product.count} productItem`}
      data-id={product.id}
    >
      <a href={`/product/${product.id}`}>{product.title}</a>
      <img src={product.img} alt='' />
      <p>{product.price}</p>
      <p>{product.count}</p>
      <button className='cardAdd'>Добавить</button>
    </div>
  );
}

module.exports = ProductCard;
