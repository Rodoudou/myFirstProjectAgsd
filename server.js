import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
// const cors = require('cors');
app.use(express.static('public'));
app.use(cors());

app.use(express.json());

app.use(routes);

// Gestion des erreurs
app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le PORT : ${PORT}`);
});
