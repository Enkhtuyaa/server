 import mongoose from "mongoose";
 
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