const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <div className='registr'>
        <h3>Привет, больной друг!!! Зарегайся по братски</h3>
        <form className='sing-up'>
          <input type='text' name='name' placeholder='name' />
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
          <input type='password' name='cpassword' placeholder='cpassword' />
          <button className='btnRegis'>Регистрация</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;
