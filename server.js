// import express from "express";
// import { ApolloServer, gql } from "apollo-server-express";
// import typeDefs from "./graphQl/typeDef/typeDefs.js";
// import resolvers from "./graphQl/resolvers/index.js";
// import "./dbconfig/db.js";

// import "dotenv/config";

// // Create an async function to start the server
// const startServer = async () => {
//   // Create an Apollo Server
//   const server = new ApolloServer({ typeDefs, resolvers });

//   // Create an Express application
//   const app = express();

//   // Start the server and wait for it to be ready
//   await server.start();

//   // Apply the Apollo Server middleware to Express
//   server.applyMiddleware({ app });

//   // Start the Express server
//   const port = 3000;
//   app.listen(port, () => {
//     console.log(
//       `Server is running on http://localhost:${port}${server.graphqlPath}`
//     );
//   });
// };

// startServer();

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import QueryResolver from "./graphQl/resolvers/query.js";
import MutationResolver from "./graphQl/resolvers/mutation.js";

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    dummyMutation: DummyMutationResponse
  }

  type DummyMutationResponse {
    success: Boolean
    message: String
  }
`;
// Define resolvers for your schema
const resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,
};
// Create an async function to start the server
const startServer = async () => {
  // Create an Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Create an Express application
  const app = express();

  // Start the server and wait for it to be ready
  await server.start();

  // Apply the Apollo Server middleware to Express
  server.applyMiddleware({ app });

  // Start the Express server
  const port = 3000;
  app.listen(port, () => {
    console.log(
      `Server is running on http://localhost:${port}${server.graphqlPath}`
    );
  });
};

// Call the async function to start the server
startServer();
