import cloudinary from "cloudinary";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import {FicheInscription} from "../models/FicheInscriptionModel.js";
import UserModel from "../models/userModel.js";

export const postFiche = async (req, res) => {
  const body = req.body;
//  const bodyFiles = req.files;
  //   console.log("/fiche-inscription = req.files", bodyFiles);
  console.log("/fiche-inscription = req.body", body);
  //  console.log("req.user", req);
  const user = await UserModel.findOne({email:body.email});
  
  console.log("user in findOne()", user);

  
  try {
    const obj = {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      sex: body.sex,
      date: body.date,
      adresse: body.adresse,
      city: body.city,
      codePostal: body.cdp,
      phone: body.phone,
      activities: body.activities,
      // droitImage: body.droitImage,
      // certificatM: body.certificatM.path,
      // photo: body.photo.path,
      // autorisation: body.autorisation.path,
      // assurance: body.assurance.path,
      creator: user
    };

    console.log("OBJ =>", obj);

    const newFichInscription = new FicheInscription(obj);
    await newFichInscription.save();
  
    res.json({
      _id: newFichInscription.id,
      firstname: newFichInscription.firstname,
      lastname: newFichInscription.lastname,
      email: newFichInscription.email,
      sex: newFichInscription.sex,
      date: newFichInscription.date,
      adresse: newFichInscription.adresse,
      ville: newFichInscription.ville,
      codePostal: newFichInscription.codePostal,
      phone: newFichInscription.phone,
      // activities: newFichInscription.activities,
      // droitImage: newFichInscription.droitImage,
      // certificatM: bodyFil.certificatM,
      // photo: bodyFil.photo,
      // autorisation: bodyFil.autorisation,
      // assurance: bodyFil.assurance,
      creator: newFichInscription.creator,
    });
  } catch (error) {
    res.json(400).json({
      error: error.message,
    });
  }
};

