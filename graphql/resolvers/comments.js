const { UserInputError } = require('apollo-server-errors');
const Post = require('../../models/Post');
const { checkAuth } = require('../../utils/auth');

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment must not be empty',
          },
        });
      }
      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
        });
        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    },
  },
};
