import { foodCategory } from "../../Schemas/food-category.js";

export const getFoodCategoryController = async (request, response) => {
  try {
    const category = await foodCategory.find();
    return response
      .status(200)
      .json({ message: "food categories found", foodCategories: category });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};
