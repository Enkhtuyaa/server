import express from "express";

import { loginController } from "../../controllers/auth/auth.js";
import { singUpController } from "../../controllers/auth/auth.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/sign-up", singUpController);

export default router;
