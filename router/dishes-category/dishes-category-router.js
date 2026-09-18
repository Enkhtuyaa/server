import express from "express";
import { createDishesCategoryController } from "../../controllers/dishes-category/create-dishes-category.js";
import { deleteDishesCategoryController } from "../../controllers/dishes-category/delete-dishes-category.js";
import {getDishesCategoryController} from "../../controllers/dishes-category/get-dishes-category.js"
import { updateDishesCategoryController } from "../../controllers/dishes-category/update-dishes-category.js";
const router = express.Router();

router.post("/create", createDishesCategoryController);

router.get("/get", getDishesCategoryController);

router.put("/update", updateDishesCategoryController);

router.delete("/delete", deleteDishesCategoryController);
 
export default router