import { gql } from "apollo-server-express";

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    _id: String
    email: String
    name: String
    userName: String
    userDetails: User
  }

  type Auth {
    token: String
    user: User
    errorMessage: String
  }

  ################# QUERY #################
  ################# QUERY #################
  type Query {
    findAUser(_id: String): User
  }

  ################# MUTATION #################
  ################# MUTATION #################
  type Mutation {
    signUp(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
