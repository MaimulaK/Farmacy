const React = require('react');
const Layout = require('./Layout');

function ProductPage({ product }) {
  return (
    <div className='productCardDescription'>
      <h3>{product.title}</h3>
      <img src={product.img} alt='product' />
      <h5>{product.description}</h5>
    </div>
  );
}

module.exports = ProductPage;
