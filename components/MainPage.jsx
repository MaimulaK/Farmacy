const React = require('react');
const Layout = require('./Layout');
const FilterSort = require('./FilterSort');
const ProductContainer = require('./ProductContainer');
const FilterCount = require('./FilterCount');

function MainPage({ title, user, products }) {
  console.log(products);
  return (
    <Layout title={title} user={user}>
      <div className='firstPageBaner'>
        <p>Social Pharmacy</p>
      </div>
      <div className='mainPage'>
        <h1>Добро пожаловать</h1>
        <FilterSort />
        <FilterCount />
        <div className='container'>
          <h1>Наши товары</h1>
          <ProductContainer products={products} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
