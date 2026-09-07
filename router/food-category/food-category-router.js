import express from "express";
import { createFoodCategoryController } from "../../controllers/food-category/create-food-category.js";

const router = express.Router();

router.post("/create",createFoodCategoryController );

router.delete("/delete", async (request, response) => {
  return response.status(200).json({ message: "food category delete" });
});

router.put("/update", async (request, response) => {
  return response.status(200).json({ message: "food category update" });
});

router.get("/get", async (request, response) => {
  return response.status(200).json({ message: "food category read" });
});

export default router;
