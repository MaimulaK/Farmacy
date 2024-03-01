const router = require('express').Router();
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

router.put('/', async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user, '<---');
    const { name, email } = req.body;
    const result = await User.update(
      { name, email },
      { where: { id: user.id } }
    );
    const userInDb = await User.findOne({
      where: { id: user.id },
      attributes: ['id', 'email', 'name'],
    });
    if (result[0]) {
      res.clearCookie('access').clearCookie('refresh');
      const { accessToken, refreshToken } = generateTokens({ user: userInDb });
      res
        .cookie('access', accessToken)
        .cookie('refresh', refreshToken)
        .status(200)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
