import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userControllers";
import { validateToken } from "../middleware/authMiddlewares";

const router = express.Router();

router.post("/", createUser);

router.get("/", validateToken, getAllUsers);
router.get("/:id", validateToken, getUserById);
router.put("/:id", validateToken, updateUser);
router.delete("/:id", validateToken, deleteUser);

export default router;
