const React = require('react');

function NavBar({ user }) {
  return (
    <div className="navBar">
      <div className="divNavbar">
        <div>
          <a href="/">Main</a>
        </div>
        {user ? (
          <>
            <div>
              <a href="/personal">Личный кабинет</a>
            </div>
            <div>
              <a href="/api/auth/logout">Logout</a>
            </div>
          </>
        ) : (
          <>
            <div>
              <a href="/auth/registration">Sing-Up</a>
            </div>
            <div>
              <a href="/auth/authorization">Sing-In</a>
            </div>
          </>
        )}
        <div>
          <a href="/cart">Cart</a>
        </div>
      </div>
    </div>
  );
}

module.exports = NavBar;
