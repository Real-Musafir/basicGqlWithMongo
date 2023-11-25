// import User from "../../../models/user/user.model";
// import { v4 as uuidv4 } from "uuid";
// import Chance from "chance";

export default {
  //   signUp: async (_, { email, password }) => {
  //     const user = await User.findOne({ email: email.toLowerCase() });
  //     if (user) {
  //       userObject = {
  //         user,
  //         errorMessage: "User Already Exists",
  //       };
  //       return userObject;
  //     } else {
  //       let checkMail = validateEmail(email); //This is for mail validation
  //       let chance = new Chance();
  //       const passCode = chance.prime({ min: 1000, max: 9999 });
  //       if (checkMail) {
  //         const user = await User.create({
  //           email: email.toLowerCase(),
  //           password,
  //           passCode,
  //           name: "",
  //           userName: "",
  //         });
  //         userObject = {
  //           user,
  //           errorMessage: null,
  //         };
  //       }
  //     }
  //   },
};

// function validateEmail(email) {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }
