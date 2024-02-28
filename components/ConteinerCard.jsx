const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function ConteinerCard({ title, products }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Наши товары</h1>
        <div className="productCard">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ConteinerCard;
