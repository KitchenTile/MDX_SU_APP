import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request {
  user?: string | jwt.JwtPayload | undefined;
}

export const validateToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = auth.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};
