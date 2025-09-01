import { Request, Response } from "express";
import UserModel from "../models/User";
import bcrypt from "bcrypt";

export const getUserById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    if (!user) return res.status(404).send("User not found");

    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { fName, lName, email, password } = req.body;

    if (!fName || !lName || !email || !password) {
      return res.status(400).send("Missing required fields");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      fName,
      lName,
      email,
      password: hashedPass,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    const publicUsers = users.map((user) => {
      const { password: _, ...publicUser } = user.toObject();
      return publicUser;
    });
    return res.status(200).json(publicUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const updateUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;
    let updatedFields = { ...req.body };

    if (updatedFields.password) {
      const salt = await bcrypt.genSalt(10);
      updatedFields.password = await bcrypt.hash(updatedFields.password, salt);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password: _, ...userWithoutPassword } = updatedUser.toObject();
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) return res.status(404).send("User not found");

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
