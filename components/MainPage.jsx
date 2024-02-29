const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function MainPage({ title, user, products }) {
  return (
    <Layout title={title} user={user}>
      <div className='mainPage'>
        <h1>Добро пожаловать</h1>
        <div className='container'>
          <h1>Наши товары</h1>
          <div className='productCard'>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
