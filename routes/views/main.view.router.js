const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Product } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const products = await Product.findAll();
  res.send(res.renderComponent(MainPage, { title: 'Аптека', user, products }));
});

module.exports = router;
