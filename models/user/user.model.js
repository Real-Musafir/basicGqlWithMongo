import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";

const UserSchema = new Schema(
  {
    name: String,
    userName: String,
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      //minlength: [8, 'password needs to be of 8 characters']
    },
    passCode: {
      type: Number,
    },
    verified: {
      type: Boolean,
      defaultValue: false,
    },
    token: String,
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
};

export default mongoose.model("User", UserSchema);
