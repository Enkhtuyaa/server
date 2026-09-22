import { dishesCategory } from "../../Schemas/dishes-category.js";

export const createDishesCategoryController = async (request, response) => {
  try {
    const { foodName, price, imageURL, ingredients, category  } = request.body;
    const categoryDishes = await dishesCategory.create({
      foodName: foodName,
      price: price,
      imageURL: imageURL,
      ingredients: ingredients,
      category: category,
    });
    return response
      .status(201)
      .json({ message: "dishes category created", categoryDishes });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};
