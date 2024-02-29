const React = require('react');
const ProductCard = require('./ProductCard');

function ProductContainer({ products }) {
  return (
    <div className='productCards'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

module.exports = ProductContainer;
