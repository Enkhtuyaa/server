import express from "express";

const router = express.Router();
router.post("/login", async (request, response) => {
  try {
    // const { email, password } = request.body;
    // console.log(email, password);
    // const user = await User.findOne({ email: email });
    // if (!user) {
    //   return response.status(404).json({ message: "user not found" });
    // }
    // return response.status(200).json({ message: "user found", user: user });
    return response.status(200).json({ messsage: "user found" })
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error });
  }
});

router.post("/sign-up", async (request, response) => {
  try {
    // const { email, password } = request.body;
    // const user = await User.create({ email, password });
    // return response.status(201).json({ message: "posted", user: user });
    return response.status(201).json({ message: "user created" })
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

export default router