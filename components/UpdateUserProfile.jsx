const React = require('react');
const Layout = require('./Layout');

function UpdateUserProfile({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='newContainer' data-id={user.id}>
        <h2>Личный кабинет</h2>
        <div className='info'>
          <input type='text' name='name' value={user.name} />
          <input type='email' name='email' value={user.email} />
          <button className='btnChange'>Изменить</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = UpdateUserProfile;
