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

export const isPasswordValid = (password: string): boolean => {
  /*
   * At least one lowercase letter ((?=.*[a-z])).
   * At least one uppercase letter ((?=.*[A-Z])).
   * At least one digit ((?=.*\d)).
   * Consists of only alphanumeric characters ([a-zA-Z\d]).
   * Has a minimum length of 8 characters ({8,}).
   */
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  return regex.test(password);
};
