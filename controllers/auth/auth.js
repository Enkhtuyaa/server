import express from "express";
import { User } from "../../Schemas/user-schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUND = 10;
const JWT_SECRET = "testing";

const signAuthToken = (user) => {
  return jwt.sign( {email: user.email, password: user.password}, JWT_SECRET, {
    expiresIn: "7d",
  });
};
export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    // console.log(email, password);
    const user = await User.findOne({ email: email });
    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }
    console.log(user.password, "user password");
    console.log(password, "password");
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      return response.status(401).json({ message: "password is not matching" });
    } 
    const token = signAuthToken(user)
    // console.log(isPasswordMatching, "isPasswordMatching")
    return response.status(200).json({ message: "user found", user: user, token: token });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};

export const singUpController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    // console.log(hashedPassword, "hashedPassword")
    // console.log(password,"password")
    const user = await User.create({ email, password: hashedPassword });
    // throw Error("aldaa");

    const token = signAuthToken(user)
    return response.status(201).json({ message: "user created", user: user, token: token });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error.message });
  }
};
