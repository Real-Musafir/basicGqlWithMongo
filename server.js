import typeDefs from "./graphQl/typeDef/typeDefs.js";
import "./dbconfig/db.js";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import QueryResolver from "./graphQl/resolvers/query.js";
import MutationResolver from "./graphQl/resolvers/mutation.js";

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
