import express from "express";
import { User } from "../../Schemas/user-schema.js";
import bcrypt from "bcrypt.js"

const SALT_ROUND = 10

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });
    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }
    return response.status(200).json({ message: "user found", user: user });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};

export const singUpController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND)
    console.log(hashedPassword, "hashedPassword")
    console.log(password, "password")
    const user = await User.create({ email, password });
    // throw Error("aldaa");
    return response.status(201).json({ message: "user created", user: user });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error.message });
  }
};
