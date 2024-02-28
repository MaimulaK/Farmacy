const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='mainPage'>
        <h1>Добро пожаловать</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
