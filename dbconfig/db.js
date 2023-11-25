import mongoose from "mongoose";
import "dotenv/config";

mongoose.Promise = global.Promise;

let local = true;

try {
  if (local) {
    mongoose.connect(process.env.Local_Db);
  }
} catch (err) {
  mongoose.createConnection(process.env.MONGODB_URI);
}

mongoose.connection
  .once("open", () => console.log("MongoDb running"))
  .on("error", (e) => {
    throw e;
  });
