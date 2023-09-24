import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jwt";

const hashingPassword = (password) => {
  const saltRounds = 10;
  const randomSalt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, randomSalt);
  return {
    salt: randomSalt,
    password: hashedPassword,
  };
};
const comparePassword = (password, hashedPassword, salt) => {
  return bcrypt.hashSync(password, salt) === hashedPassword;
};
const generateToken = (data) => {
  const token = jwt.sign(data, process.env.PRIVATE_KEY, {
    expiresIn: 1000,
  });
  return token;
};

export default { hashingPassword, comparePassword, generateToken };
