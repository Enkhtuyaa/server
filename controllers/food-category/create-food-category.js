import { foodCategory } from "../../Schemas/food-category.js";

export const createFoodCategoryController = async (request, response) => {
  try {
    const { categoryName } = request.body;
    const category = await foodCategory.create({
      categoryName: categoryName.trim(),
    });
    return response
      .status(201)
      .json({ message: "food category created", category });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
