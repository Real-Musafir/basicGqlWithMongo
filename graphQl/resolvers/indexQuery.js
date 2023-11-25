import User from "../../models/user/user.model.js";
const indexQuery = {
  User: {
    userDetails: async ({ _id }) => {
      return User.findOne({ _id });
    },
  },
};

export default indexQuery;
