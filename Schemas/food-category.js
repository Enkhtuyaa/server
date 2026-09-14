import mongoose from "mongoose";
const foodCategorySchema = new mongoose.Schema(
  { categoryName: String },
  {
    timestapms: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);
 
export const foodCategory = mongoose.model("foodCategory", foodCategorySchema)
