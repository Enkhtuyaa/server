export const createFoodCategoryController = async (request, response) => {
  try {
    const { name } = request.body;
    
    return response
    .status(200)
    .json({ message: `food category create controller found ${name}`  });
  
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Interval Server Error", error: error.message });
  }
};
