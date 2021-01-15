import express from "express";
// import formidableMiddleWare from "express-formidable";
import routes from "./routes/routes.js";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();


  mongoose.connect(
      process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex : true 
      }
  )
  .then(() => {
      console.log('Connection etabli avec MongoDB');
  })
  .catch(error => console.error(error.message));;
  
// const cors = require('cors');
app.use(express.static('public'));
app.use(cors());

app.use(express.json());
//app.use(formidableMiddleWare());

app.use(routes);

// Gestion des erreurs
app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le PORT : ${PORT}`);
});
