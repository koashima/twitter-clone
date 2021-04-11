const { UserInputError } = require('apollo-server');
const User = require('../../models/User');
const {
  validateRegisterInput,
  validateLoginInput,
} = require('../../utils/validators');
const {
  generateToken,
  matchPassword,
  hashPassword,
} = require('../../utils/auth');

module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);
      const user = await User.findOne({ username });
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      if (!user) {
        errors.general = 'User not found.';
        throw new UserInputError('User not found', { errors });
      }
      const match = await matchPassword(password, user);
      if (!match) {
        errors.general = 'Wrong credentials.';
        throw new UserInputError('Wrong credentials', { errors });
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('Username is already taken.', {
          errors: {
            username: 'This username is already taken.',
          },
        });
      }

      password = await hashPassword(password);

      const newUser = new User({
        email,
        username,
        password,
      });

      const res = await newUser.save();

      const token = generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
