const React = require('react');
const Layout = require('./Layout');

function ProductPage({ product }) {
  return (
    <Layout title={product.title}>
      <div className='productCardDescription'>
        <h3>{product.title}</h3>
        <img src={product.img} alt='product' />
        <h5>{product.description}</h5>
      </div>
    </Layout>
  );
}

module.exports = ProductPage;
