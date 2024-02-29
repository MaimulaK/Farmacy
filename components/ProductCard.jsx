const React = require('react');

function ProductCard({ product }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>Добавить</button>
    </div>
  );
}

module.exports = ProductCard;
