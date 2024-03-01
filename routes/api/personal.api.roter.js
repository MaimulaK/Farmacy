const router = require('express').Router();
const { User } = require('../../db/models');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await User.update({ name, email }, { where: { id } });
    if (result[0]) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
