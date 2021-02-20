import express from "express";
import mongoose from "mongoose";
import formidableMiddleWare from "express-formidable";
import routes from "./routes/routes.js";
import "./auth/auth.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Connection à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connection etabli avec MongoDB");
  })
  .catch((error) => console.error("######", error.message));

app.use(express.static("public"));
app.use(cors());

app.use(express.json());
app.use(formidableMiddleWare());

app.use(routes);

// Gestion des erreurs
app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le PORT : ${PORT}`);
});
