const React = require('react');
const Layout = require('./Layout');

function ProductPage({ product }) {
  return (
    <Layout title={product.title}>
      <div className='productCardDescription'>
        <div className='cardProductPage'>
          <h3 className='titlePage'>{product.title}</h3>
          <div className='filling'>
            <img src={product.img} alt='product' />
            <div className='product-left'>
              <p className='price'>{product.price} ₽</p>
              <h5 className='description'>{product.description}</h5>
            </div>
          </div>
        </div>
        <a className='back' href='/'>Вернуться в каталог</a>
      </div>
    </Layout>
  );
}

module.exports = ProductPage;
