import { Router } from "express";
import { register, login } from "../controllers/authController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createUserValidator } from "../validators/userValidators.js";

const router = Router();

router.post("/register", createUserValidator, register);

router.post("/login", login);

export default router;