const React = require('react');

function FilterSort() {
  return (
    <div className='formSort'>
      <p>Цена:</p>
      <button className='sortUp'>↑</button>
      <button className='sortDown'>↓</button>
    </div>
  );
}

module.exports = FilterSort;
