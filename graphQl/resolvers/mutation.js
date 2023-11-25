// resolvers/mutation.js
const MutationResolver = {
  // Your mutation resolver implementation
  dummyMutation: (parent, args, context, info) => {
    // You can perform any logic here
    // For now, let's just return a dummy response
    return {
      success: true,
      message: "Dummy mutation executed successfully!",
    };
  },
};

export default MutationResolver;
