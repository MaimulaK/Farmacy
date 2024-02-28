const { User } = require('../db/models');

// помогает находить пользователя
async function getUser(req, res, next) {
  // проверяем наличе пользователя в localstorage
  if (res.locals.user) {
    // находим в базе
    const user = await User.findOne({
      // какой пользователь
      where: { id: res.locals.user.id },
      // какие аттрибуты нужны
      attributes: ['name', 'id'],
    });

    res.locals.user = user;
  }

  next();
}

module.exports = getUser;
