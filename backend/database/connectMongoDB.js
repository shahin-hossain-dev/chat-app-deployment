import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log("connect mongodb");
  } catch (error) {
    console.log(`Error connecting to mongoDB : ${error.message}`);
  }
};

export default connectToMongoDB;
