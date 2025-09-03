import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (auth !== undefined) {
    const token = auth.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid token" });
      }
    });
  }
};
