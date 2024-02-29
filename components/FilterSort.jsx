const React = require('react');

function FilterSort() {
  return (
    <div className='formSort'>
      <h2>Цена:</h2>
      <button className='sortUp'>↑</button>
      <button className='sortDown'>↓</button>
    </div>
  );
}

module.exports = FilterSort;
