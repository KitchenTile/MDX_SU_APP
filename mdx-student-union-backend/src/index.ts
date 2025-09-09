import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes";
import { connectDb } from "./config/db";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import postRouter from "./routes/postRoutes";

dotenv.config();

const app = express();
connectDb();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (_req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 4000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("🔥 Error:", err.stack || err.message);

    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
);
