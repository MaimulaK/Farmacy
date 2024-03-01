const React = require('react');
const Layout = require('./Layout');

function Personal({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='personalContainer' data-id={user.id}>
        <h2>Личный кабинет</h2>
        <div className='info'>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <button className='btnChange'>Изменить</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Personal;
