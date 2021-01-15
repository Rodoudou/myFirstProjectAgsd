import { createRequire } from "module";
const require = createRequire(import.meta.url);
//importation des models
import { User } from "../models/userModel.mjs";

//parametres pour crypter le password
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser = async (req, res) => {
  const body = req.fields;
  console.log("body 1ere route user/sign_up => ", body);
  //Data pour construction du password

  try {
    const user = await User.findOne({ email: body.email });

    if (user) {
      res.json({ message: "This email has already an account." });
    } else {
      if (body.email && body.password && body.username) {
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(body.password + salt).toString(encBase64);
        const user = new User({
          email: body.email,
          token: token,
          salt: salt,
          hash: hash,
          account: {
            username: body.username,
            phone: body.phone,
          },
        });

        await user.save();

        res.json({
          _id: user._id,
          token: user.token,
          account: user.account,
        });
      } else {
        res.json({ error: "Missing parameter(s)" });
      }
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred",
    });
  }
};
