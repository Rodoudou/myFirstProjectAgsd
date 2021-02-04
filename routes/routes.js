import express from "express";
import { catchErrors } from "../helpers.js";
import { getPost } from "../controllers/emailControllers.js";
import { addUser } from "../controllers/usersControllers.js";
import { login } from "../controllers/loginControllers.js";
import {
  postFiche,
  // uploadFichiers
} from "../controllers/ficheInscriptionControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Redouane Amrani");
});

//Authentication
router.post("/user/sign_up", catchErrors(addUser));
router.post("/user/log_in", catchErrors(login));

router.post("/mail", catchErrors(getPost));
router.post("/fiche-inscription", catchErrors(postFiche));

// router.post("/upload", catchErrors(uploadFichiers));

export default router;
