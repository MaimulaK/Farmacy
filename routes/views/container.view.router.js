const router = require('express').Router();
const ConteinerCard = require('../../components/ConteinerCard');

const { Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(
      res.renderComponent(ConteinerCard, { title: 'Продукты', products })
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
