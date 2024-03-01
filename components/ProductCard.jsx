const React = require('react');

function ProductCard({ product }) {
  return (
      <div
        className={`product-${product.count} productItem`}
        data-id={product.id}
      >
        <img src={product.img} alt='' />
        <a className='title' href={`/product/${product.id}`}>{product.title}</a>
        <p className='price'>{product.price} ₽</p>
        <p className='count'>
          <span>Кол-во:</span> {product.count}
        </p>
        <button className='cardAdd'>Добавить</button>
      </div>
  );
}

module.exports = ProductCard;
