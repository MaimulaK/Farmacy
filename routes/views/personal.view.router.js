const router = require('express').Router();
const Personal = require('../../components/Personal');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  // console.log(user);
  const document = res.renderComponent(Personal, {
    title: 'Личный кабинет',
    user,
  });
  res.status(201).send(document);
});

module.exports = router;
