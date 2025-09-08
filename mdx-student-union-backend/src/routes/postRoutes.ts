import express from "express";

import {
  deletePost,
  getAllPosts,
  getPostById,
  editPost,
  createEvent,
  createCommunication,
} from "../controllers/postControllers";

const postRouter = express.Router();

postRouter.post("/event", createEvent);
postRouter.post("/communication", createCommunication);
postRouter.get("/", getAllPosts);

postRouter.get("/:id", getPostById);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
