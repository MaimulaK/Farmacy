// components/Layout.jsx
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/styles/normalize.css' />
        <link rel='stylesheet' href='/styles/Navbar.css' />
        <link rel='stylesheet' href='/styles/MainPage.css' />
        <link rel='stylesheet' href='/styles/ProductPage.css' />
        <link rel='stylesheet' href='/styles/AuthorizationPage.css' />
        <link rel='stylesheet' href='/styles/RegistrationPage.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />

        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap'
          rel='stylesheet'
        />

        <script defer src='/scripts/mainScript.js' />
        <script defer src='/scripts/auth.js' />
        <script defer src='/scripts/product.js' />
        <script defer src='/scripts/personal.js' />
        <script defer src='/scripts/cart.js' />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
