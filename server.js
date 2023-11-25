import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./graphQl/typeDef/typeDefs.js";
import resolvers from "./graphQl/resolvers/index.js";
import "./dbconfig/db.js";

import "dotenv/config";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(
      `Server is running on http://localhost:${port}${server.graphqlPath}`
    );
  });
}

startServer();
