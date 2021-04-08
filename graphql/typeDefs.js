const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');



module.exports = gql`

  scalar Date
  type Post {
    id: ID!
    body: String!
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
    getUsers: [User]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`;

