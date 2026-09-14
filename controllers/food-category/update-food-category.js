import { foodCategory } from "../../Schemas/food-category.js";

export const updateFoodCategoryController = async (request, response) => {
  try {
    const { id, name } = request.body;
    const category = await foodCategory.findByIdAndUpdate(
      id,
      { categoryName: name },
      { new: true },
    );
    if (!category) {
      return response.status(404).json({ message: "food category not found" });
    }
     return response
        .status(200)
        .json({ message: "food category updated", category });
  } 
  catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
