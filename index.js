import express from "express";
import cors from "cors"
// import mongoose from "mongoose";
import { User } from "./Schemas/user-schema.js";
import { connectDB } from "./connectDB.js";
import authRouter from "./router/auth/auth.js"
import foodCategoryRouter from "./router/food-category/food-category-router.js"


const app = express();

const PORT = 1000;

app.use(express.json());
app.use(cors())

connectDB();

app.use("/auth", authRouter);

app.use("/food-category", foodCategoryRouter)


app.listen(PORT, () => {
  console.log(`server is running, on port ${PORT}`);
});



// mongodb+srv://enkhtuya:ty7890ghjy@food-delivery.daacozk.mongodb.net/
