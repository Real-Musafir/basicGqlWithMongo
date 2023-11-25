import userModel from "../../models/user/user.model.js";
import UserResolver from "./user/User.resolver.js";

const MutationResolver = {
  // Your mutation resolver implementation
  signUp: UserResolver.signUp,
};

export default MutationResolver;
