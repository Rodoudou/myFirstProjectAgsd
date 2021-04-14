import { generateTokenForUser } from "../utils/jwt.utils.js";

import UserModel from "../models/userModel.js";
// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser = async (req, res, next) => {
  const body = req.body;
  const token = generateTokenForUser(body.username);

  const obj = {
    email: body.email,
    username: body.username,
    phone: body.phone,
    password: body.password,
  };
  obj.message = "Message ok";
  obj.user = req.user;
  obj.token = token;

  console.log("obj", obj);
  const userData = await UserModel.find();

  console.log("userData in userCtr", userData);

  res.json(obj);
};
