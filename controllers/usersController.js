import {generateTokenForUser} from "../utils/jwt.utils.js"
// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser = async (req, res, next) => {
  const body = req.body;
  console.log("body dans userControllers", body);
  console.log("token in userCtr", generateTokenForUser(body.username));

  
  res.json({
    message: "Signup ok",
    user: req.user,
    token:generateTokenForUser(body.username),
    username: body.username,
  });
};
