const React = require('react');

function NavBar({ user }) {
  return (
    <div className='navBar'>
      <div className='divNavbar'>
        <div>
          <a href='/'>Main</a>
        </div>
        {user ? (
          <>
            <div>
              <a href='/personal' className='cartIconHrefa'>
                <img
                className='cartIconA'
                  src='https://cdn.icon-icons.com/icons2/4160/PNG/512/security_hacker_people_management_teamwork_group_team_icon_261674.png'
                  alt=''
                />
              </a>
            </div>
            <div>
              <a className='cartIconHref' href='/cart'>
                <img
                  className='cartIcon'
                  src='https://cdn.icon-icons.com/icons2/1760/PNG/512/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.png'
                />
              </a>
            </div>
            <div>
              <a href='/api/auth/logout'>Logout</a>
            </div>
          </>
        ) : (
          <>
            <div>
              <a href='/auth/registration'>Sing-Up</a>
            </div>
            <div>
              <a href='/auth/authorization'>Sing-In</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = NavBar;
