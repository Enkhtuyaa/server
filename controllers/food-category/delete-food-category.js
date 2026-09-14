import { foodCategory } from "../../Schemas/food-category.js";

export const deleteFoodCategoryController = async (request, response) => {
  try {
    const { id } = request.body;
    const category = await foodCategory.findByIdAndDelete(id);
    if (!category) {
      return response.status(404).json({ message: "food category not found" });
    }
    return response.status(200).json({ message: "deleted", category });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
   