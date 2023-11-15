import { gql } from "apollo-server-express";

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs;
