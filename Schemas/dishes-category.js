import mongoose from "mongoose";

const DishesCategorySchema = new mongoose.Schema (
    {  
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true},
    ingredients: {type: String, required: true},
    category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
    timestapms: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
})
export default mongoose.model("DishesCategory", DishesCategorySchema)