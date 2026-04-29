import { Router } from "express";
import { getTasks, getTaskById, createTask, editTask, deleteTask } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validate.js";
import { createTaskvalidator, updateTaskValidator, deleteTaskValidator } from "../validators/taskValidations.js";
const router = Router();

router.get("/", authMiddleware, getTasks);
router.get("/:id", authMiddleware, getTaskById);
router.post("/", authMiddleware, createTaskvalidator, validate, createTask);
router.put("/:id", authMiddleware, updateTaskValidator, validate, editTask);
router.delete("/:id", authMiddleware, deleteTaskValidator, validate,  deleteTask);

export default router;