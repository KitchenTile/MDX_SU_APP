import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI!);
    await mongoose.connect(
      "mongodb+srv://azuldebenedetti_db_user:wfrFRO9UEdCuXq4D@mdx-su-db.eyetz9f.mongodb.net/?retryWrites=true&w=majority&appName=MDX-SU-DB"
    );

    console.log("connected to db succesfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
