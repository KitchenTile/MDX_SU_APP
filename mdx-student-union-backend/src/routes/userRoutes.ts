import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/id", updateUser);
router.get("/:id", getAllUsers);
router.delete("/:id", deleteUser);

export default router;
