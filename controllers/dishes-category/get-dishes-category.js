import { dishesCategory } from "../../Schemas/dishes-category.js";

export const getDishesCategoryController = async (request, response) => {
  try {
    const categoryDishes = await dishesCategory.find().populate("category");
    return response
      .status(200)
      .json({
        message: "dishes categories found",
        dishesCategories: categoryDishes,
      });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};
