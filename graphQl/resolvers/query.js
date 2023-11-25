import UserResolver from "./user/User.resolver.js";
import "./indexQuery.js";

// resolvers/query.js
const QueryResolver = {
  findAUser: UserResolver.findAUser,
};

export default QueryResolver;
