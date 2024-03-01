// components/Layout.jsx
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
