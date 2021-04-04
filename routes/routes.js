import express from "express";
import passport from "passport";
import { catchErrors } from "../helpers.js";
import User from '../models/userModel.js';
import { email } from "../controllers/emailControllers.js";
import { addUser } from "../controllers/usersController.js";
//import { loginRoute } from "../controllers/loginController.js";
import {
  postFiche,
  // uploadFichiers
} from "../controllers/ficheInscriptionControllers.js";
import { generateTokenForUser } from "../utils/jwt.utils.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Redouane Amrani");
});

//Authentication
router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  catchErrors(addUser)
);

router.post("/login", (req, res, next) => {
  console.log("body in login rout", req.body);
  passport.authenticate("login", async (err, user) => {
    const userData = await User.findOne({email:req.body.email});
    console.log("userData from login rout",userData);
    try {
      if (err || !user) {
        const error = new Error("Une erreur est survenue.");
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        console.log(user);
        const body = {
          id: user._id,
          email: user.email,
          token: generateTokenForUser(user),
        };
        res.json(body);
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post("/mail", catchErrors(email));
router.post("/fiche-inscription", catchErrors(postFiche));

export default router;
