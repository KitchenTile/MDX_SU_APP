import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes";
import { connectDb } from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
connectDb();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 4000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
