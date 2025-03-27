import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connect mongodb");
  } catch (error) {
    console.log(`Error connecting to mongoDB : ${error.message}`);
  }
};

export default connectToMongoDB;
