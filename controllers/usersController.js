import User from "../models/userModel.js";
import { generateTokenForUser } from "../utils/jwt.utils.js";

// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser = async (req, res, next) => {
  const body = req.body;
  const obj = {
    email: body.email,
    username: body.username,
    phone: body.phone,
    password: body.password,
  };

  console.log("obj", obj);
  const newUser = new User(obj);
  await newUser.save();

  res.json({
    _id: newUser.id,
    message: "Signup ok",
    user: req.user,
    username: newUser.username,
    token: generateTokenForUser(newUser.username),
  });

};
