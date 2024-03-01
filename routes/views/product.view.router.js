const router = require('express').Router();
const ProductPage = require('../../components/ProductPage');
const { Product } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    const document = res.renderComponent(ProductPage, { product });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
