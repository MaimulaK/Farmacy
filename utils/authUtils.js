const jwt = require('jsonwebtoken');
// в конфиге можем настроить время жизни и название наших ключей
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'A', {
    // здесь access и это восковый билет
    expiresIn: jwtConfig.access.expiresIn,
  }),

  refreshToken: jwt.sign(payload, 'R', {
    // здесь рефреш и это наш чек
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = generateTokens;
