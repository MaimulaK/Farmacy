const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.send(res.renderComponent(MainPage, { title: 'Аптека', user }));
});

module.exports = router;
