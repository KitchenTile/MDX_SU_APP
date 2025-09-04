import { Request, Response } from "express";
import UserModel from "../models/User";
import bcrypt from "bcrypt";
import { generateJWT } from "../utils/jwt";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, data) => {
      if (err) {
        return res.status(401).json({ message: "Invalid credential" });
      } else {
        const token = generateJWT({ id: user._id, role: user.role });
        const { password: _, ...userWithoutPassword } = user.toObject();

        return res.status(200).json({
          user: userWithoutPassword,
          token,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};
