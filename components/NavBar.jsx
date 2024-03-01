const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navBar'>
      <div>
        <ul>
          <li>
            <a href='/'>Main</a>
          </li>
          {user ? (
            <>
              <li>
                <a href='/personal'>Личный кабинет</a>
              </li>
              <li>
                <a href='/api/auth/logout'>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='/auth/registration'>Sing-Up</a>
              </li>
              <li>
                <a href='/auth/authorization'>Sing-In</a>
              </li>
            </>
          )}
          <li>
            <a href='/cart'>Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = NavBar;
