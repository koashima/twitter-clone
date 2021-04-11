const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: '2h' }
  );
};

module.exports.matchPassword = (password, user) =>
  bcrypt.compare(password, user.password);

module.exports.hashPassword = (password) => bcrypt.hash(password, 12);
