const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');

module.exports = gql`
  scalar Date
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: Date!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    username: String!
    body: String!
    createdAt: Date!
  }
  type Like {
    id: ID!
    username: String!
    createdAt: Date!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: Date!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getUsers: [User]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription{
    newPost: Post!
  }
`;
