// import { dishesCategory } from "../../Schemas/dishes-category.js";

// export const updateDishesCategoryController = async (request, response) => {
//   try {
//     const { id, name } = request.body;
//     const categoryDishes = await dishesCategory.findByIdAndUpdate(
//       id,
//       { foodName: name },
//       { new: true },
//     );
//     if (!categoryDishes) {
//       return response
//         .status(404)
//         .json({ message: "dishes category not found" });
//     }
//     return response
//       .status(200)
//       .json({ message: "dishes category updated", categoryDishes });
//   } catch (error) {
//     return response
//       .status(500)
//       .json({ message: "Interval Server Error", error: error.message });
//   }
// };

import { dishesCategory } from "../../Schemas/dishes-category.js";

export const updateDishesCategoryController = async (request, response) => {
  try {
    const { id, name, price, image, category, ingredients } = request.body;

    if (!id) {
      return response.status(400).json({ message: "id is required" });
    }

    if (!name || !price || !image || !category || !ingredients) {
      return response
        .status(400)
        .json({ message: "All fields are required" });
    }

    const updatedDish = await dishesCategory.findByIdAndUpdate(
      id,
      {
        foodName: name,
        price,
        image,
        category,
        ingredients,
      },
      { new: true, runValidators: true },
    );

    if (!updatedDish) {
      return response
        .status(404)
        .json({ message: "dishes category not found" });
    }

    return response
      .status(200)
      .json({ message: "dishes category updated", updatedDish });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};