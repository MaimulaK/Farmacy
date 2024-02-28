// components/Layout.jsx
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        {/* <link rel='stylesheet' href='/css/style.css' />
        <script src='/js/script.js' /> */}
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
