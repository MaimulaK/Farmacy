const React = require('react');
const Layout = require('./Layout');
const FilterSort = require('./FilterSort');
const ProductContainer = require('./ProductContainer');

function MainPage({ title, user, products }) {
  console.log(products);
  return (
    <Layout title={title} user={user}>
      <div className='mainPage'>
        <h1>Добро пожаловать</h1>
        <FilterSort />
        <div className='container'>
          <h1>Наши товары</h1>
          <ProductContainer products={products} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
