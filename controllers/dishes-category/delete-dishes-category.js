import { dishesCategory } from "../../Schemas/dishes-category.js";

export const deleteDishesCategoryController = async ( request, response) => {
    try{
        const { id } = request.body
        const categoryDishes = await dishesCategory.findByIdAndDelete(id)
        if (!categoryDishes){
            return response.status(404).json({ message: "dishes category not found"})
        } 
        return response.status(200).json({ message: "deleted", categoryDishes})
    }
catch(error) {
    return response
    .status(500)
    .json({ message: "Internal Server Error", error: error.message})
}
}