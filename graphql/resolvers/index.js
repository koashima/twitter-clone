const postResolvers = require('./post');
const usersResolvers = require('./users');

module.exports = {
  Query: {
    ...postResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation
  }
};
