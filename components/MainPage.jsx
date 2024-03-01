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
        <div className="firstPageBaner">
          <p>Social Pharmacy</p>
          <p className='description'>Добро пожаловать в нашу социальную аптеку.</p>
          <a href='#catalog'>Перейти к товарам</a>
        </div>
      </div>
      <div id = 'catalog'className="mainPage">
        <h1>Добро пожаловать</h1>
        <form className='form-date'>
          <input type='date' className='form-data__input' />
          <button className='form-date__button'>Бесплатный продукт</button>
        </form>
        <div className='randomProduct' style={{ display: 'none' }} />
        <FilterSort />
        <FilterCount />
        <div className="container">
          <h1>Наши товары</h1>
          <ProductContainer products={products} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
