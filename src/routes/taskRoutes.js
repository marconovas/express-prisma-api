import { Router } from "express";
import { getTasks, getTaskById, createTask, editTask, deleteTask } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/", authMiddleware, getTasks);
router.get("/:id", authMiddleware, getTaskById);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, editTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;