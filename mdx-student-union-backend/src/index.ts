import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 4000;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
