const router = require('express').Router();
const ProductContainer = require('../../components/ProductContainer');
const { Product } = require('../../db/models');
const ProductCard = require('../../components/ProductCard');

router.get('/sortUp', async (req, res) => {
  try {
    const sortProduct = await Product.findAll({ order: [['price', 'ASC']] });
    if (sortProduct) {
      const html = res.renderComponent(
        ProductContainer,
        { products: sortProduct },
        { doctype: false }
      );
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/sortDown', async (req, res) => {
  try {
    const sortProduct = await Product.findAll({ order: [['price', 'DESC']] });
    if (sortProduct) {
      const html = res.renderComponent(
        ProductContainer,
        { products: sortProduct },
        { doctype: false }
      );
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/filterCount', async (req, res) => {
  try {
    const filterProduct = await Product.findAll({ order: [['count', 'DESC']] });
    if (filterProduct) {
      const html = res.renderComponent(
        ProductContainer,
        { products: filterProduct },
        { doctype: false }
      );
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/getOne', async (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const product = await Product.findOne({ where: { id: randomNumber } });
    console.log(product, 11111111);
    const html = res.renderComponent(
      ProductCard,
      { product },
      { doctype: false }
    );
    console.log(html, 222222222);
    res.json({ html });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
