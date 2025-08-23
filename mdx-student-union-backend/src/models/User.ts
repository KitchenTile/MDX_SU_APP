import mongoose from "mongoose";

interface IUser {
  fName: string;
  lName: string;
  uName: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  uName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
