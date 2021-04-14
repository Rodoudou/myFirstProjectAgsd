import express from "express";
import passport from "passport";
import { catchErrors } from "../helpers.js";
import { generateTokenForUser } from "../utils/jwt.utils.js";
import { email } from "../controllers/emailControllers.js";
import { addUser } from "../controllers/usersController.js";
import User from "../models/userModel.js";

import {
  postFiche,
  // uploadFichiers
} from "../controllers/ficheInscriptionControllers.js";

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
  passport.authenticate("login",async (err, user) => {
    const userData = await User.findOne({ email: user.email });
    console.log("userData from login rout", userData);
    try {
      if (err || !user) {
        const error = new Error("Une erreur est survenue.");
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = {
          id: user._id,
          email: user.email,
          username: req.body.username,
          token: generateTokenForUser(req.body.username),
        };
        res.json(body);
      });
    } catch (error) {
      return next(error);
    }
  } )(req, res, next);
});

router.post("/mail", catchErrors(email));
router.post("/fiche-inscription", catchErrors(postFiche));

export default router;
