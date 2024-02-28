const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <h3>Авторизация</h3>
      <form className='sing-in'>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button>Зайти на сайт</button>
      </form>
    </Layout>
  );
}

module.exports = AuthorizationPage;
