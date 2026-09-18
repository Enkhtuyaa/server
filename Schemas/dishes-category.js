import mongoose from "mongoose";

const DishesCategorySchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  date: { type: Date, default: Date.now },
});

export const dishesCategory = mongoose.model(
  "dishesCategory",
  DishesCategorySchema,
);
