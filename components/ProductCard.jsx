const React = require('react');

function ProductCard({ product }) {
  return (
    <div className="product">
      <div>{product.title}</div>
      <img src={product.img} alt="" />
      <div>{product.price}</div>
      <div>{product.description}</div>
      <button>Добавить</button>
    </div>
  );
}

module.exports = ProductCard;
