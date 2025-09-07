import express from "express";

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  editPost,
} from "../controllers/postControllers";

const postRouter = express.Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);

postRouter.get("/:id", getPostById);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
