import { Request, Response } from "express";
import EventModel from "../models/Event";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, venue, sDate, eDate, location } = req.body;

    if (!title || !venue || !sDate || !eDate || !location) {
      res.status(400).json({ message: "Missing required fields" });
    }

    const event = await EventModel.create({
      title,
      venue,
      sDate,
      eDate,
      location,
    });

    res.status(200).send(event);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const deletePost = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const postId = req.params.id;

    const deletedPost = await EventModel.findByIdAndDelete(postId);
    if (!deletedPost) return res.status(404).send("Post not found");

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const editPost = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const postId = req.params.id;

    const updatedFields = { ...req.body };

    const updatedPost = await EventModel.findByIdAndUpdate(
      postId,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).send(updatedPost);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const getPostById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const postId = req.params.id;

    const post = await EventModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).send(post);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await EventModel.find({});
    res.status(200).send(allPosts);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
