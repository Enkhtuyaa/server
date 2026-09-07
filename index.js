import express from "express";
import mongoose from "mongoose";
import { User } from "./Schemas/user-schema.js";
import { connectDB } from "./connectDB.js";
import authRouter from "./router/auth/auth.js"
const app = express();

const PORT = 1000;

app.use(express.json());

connectDB();

app.get("/app/health", (request, response) => {
  response.json({ message: `API HEALTHY RUNNING ON ${PORT}` });
}); // read

app.use("/auth/", authRouter);

// app.post("/sign-up",);



app.post("/food/category", async (request, response) => {
  try {
    const { categoryName, CreatedAt, UpdatedAt } = request.body;
    console.log(hool);
    const user = await User.findOne({ hool: hool });
    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }
    return response.status(200).json({ message: "user found", user: user });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`server is running, on port ${PORT}`);
});

// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION:', err);
// });

// process.on('exit', (code) => {
//   console.log('Process exited with code:', code);
// });

// mongodb+srv://enkhtuya:ty7890ghjy@food-delivery.daacozk.mongodb.net/
