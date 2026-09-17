 import mongoose from "mongoose";
 const MONGODB_CONNECT_URL = process.env.MONGO_DB || null
 export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://enkhtuya:ty7890ghjy@food-delivery.daacozk.mongodb.net",
    );
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};