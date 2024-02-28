const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <div className='mainPage'>
        <h1>Добро пожаловать</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
