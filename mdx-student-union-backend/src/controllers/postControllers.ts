import { Request, Response } from "express";
import { CommunicationModel, EventModel, PostModel } from "../models/Posts";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, venue, location, tags, img } = req.body;

    const sDate = new Date(req.body.sDate);
    const eDate = new Date(req.body.eDate);

    if (!title || !venue || !sDate || !eDate || !location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const event = await EventModel.create({
      title,
      venue,
      sDate,
      eDate,
      location,
      tags,
      img,
    });

    return res.status(201).json(event);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const createCommunication = async (req: Request, res: Response) => {
  try {
    const { title, author, message, tags, img } = req.body;

    if (!title || !author || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const communication = await CommunicationModel.create({
      title,
      author,
      body: message,
      tags,
      img,
    });

    return res.status(201).json(communication);
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

    const deletedPost = await PostModel.findByIdAndDelete(postId);
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

    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).send(updatedPost);
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
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).send(post);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await PostModel.find({}).lean();
    return res.status(200).send(allPosts);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
