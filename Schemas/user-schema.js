import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      role: { type: String, enum: ["user", "admin"], default: "user"},
      // unique: true, // enforces "no two accounts with the same email" at the DB level
      // lowercase: true,
      // trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
  },
  // { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
