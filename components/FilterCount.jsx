const React = require('react');

function FilterCount() {
  return (
    <div className='filterCount'>
      <p>Наличие:</p>
      <button className='filter'>↑</button>
    </div>
  );
}

module.exports = FilterCount;
