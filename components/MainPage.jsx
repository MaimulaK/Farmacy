const React = require('react');
const Layout = require('./Layout');
const FilterSort = require('./FilterSort');
const ProductContainer = require('./ProductContainer');
const FilterCount = require('./FilterCount');

function MainPage({ title, user, products }) {
  console.log(products);
  return (
    <Layout title={title} user={user}>
      <div>
        <div className='firstPageBaner'>
          <p>Social Pharmacy</p>
          <p className='description'>
            Добро пожаловать в нашу социальную аптеку.
          </p>
          <a href='#catalog'>Перейти к товарам</a>
        </div>
      </div>
      <div id='catalog' className='mainPage'>
        <div className='filtBtn'>
          <div className='btnfiltDiv'>
            <p>Сортировка</p>
            <FilterSort />
            <FilterCount />
          </div>
        </div>
        <h1>Наши товары</h1>
        <div className='container'>
          <ProductContainer products={products} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
