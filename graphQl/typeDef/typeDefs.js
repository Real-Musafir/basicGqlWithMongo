import { gql } from "apollo-server-express";

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    _id: String
    email: String
    name: String
    userName: String
  }

  type Auth {
    token: String
    user: User
    errorMessage: String
  }

  ################# QUERY #################
  ################# QUERY #################
  ################# QUERY #################
  ################# QUERY #################
  type Query {
    hello: String
  }

  ################# MUTATION #################
  ################# MUTATION #################
  ################# MUTATION #################
  ################# MUTATION #################
  type Mutation {
    signUp(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
