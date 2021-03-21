import express from "express";
import passport from "passport";
import { catchErrors } from "../helpers.js";
import { getPost } from "../controllers/emailControllers.js";
import { addUser } from "../controllers/usersControllers.js";

import {
  postFiche,
  // uploadFichiers
} from "../controllers/ficheInscriptionControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Redouane Amrani");
});

//Authentication
router.post("/signup",
 passport.authenticate('signup',{session:false}),
 catchErrors(addUser));

 
router.post("/login",(req,res, next)=>{
  passport.authenticate('login', async (err, user)=>{
    try {
      if(err || !user){
        const error = new Error('Une erreur est survenue.')
        return next(error);
      }
      req.login(user, {session:false}, async error =>{
        if(error) return next(error)

        const body = {id: user._id, email: user.email}
        res.json(body)
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

router.post("/mail", catchErrors(getPost));
router.post("/fiche-inscription", catchErrors(postFiche));

export default router;
