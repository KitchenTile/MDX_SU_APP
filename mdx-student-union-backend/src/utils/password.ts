import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  return hashedPass;
};

export const comparePassword = async (
  password: string,
  userPassword: string
) => {
  return bcrypt.compare(password, userPassword);
};
