import express from "express";
import mongoose from "mongoose";
import { User } from "./Schemas/user-schema.js";
import { connectDB } from "./connectDB.js";

const app = express();

const PORT = 1000;

app.use(express.json());

connectDB();

app.get("/app/health", (request, response) => {
  response.json({ message: `API HEALTHY RUNNING ON ${PORT}` });
}); // read

app.post("/sign-up", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.create({ email, password });

    // Энэ мөр терминал дээр хэвлэж харуулна:
    console.log("--> Шинэ хэрэглэгч амжилттай хадгалагдлаа:", user);

    response.status(201).json({ message: "posted", user });
  } catch (error) {
    console.log("Алдаа гарлаа:", error);
    response.status(500).json({ error: error.message });
  }
});

app.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });
    if (!user) {
      response.status(404).json({ message: "user not found" });
    }
    response.status(200).json({ message: "user found", user: user });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal Server Error", error: error });
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
