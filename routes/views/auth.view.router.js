const router = require('express').Router();
const RegistrationPage = require('../../components/RegistrationPage');
const AuthorizationPage = require('../../components/AuthorizationPage');

router.get('/registration', async (req, res) => {
  const document = res.renderComponent(RegistrationPage, {
    title: 'Регистрация',
  });
  res.status(201).send(document);
});

router.get('/authorization', async (req, res) => {
  const document = res.renderComponent(AuthorizationPage, {
    title: 'Авторизация',
  });
  res.status(201).send(document);
});

module.exports = router;
