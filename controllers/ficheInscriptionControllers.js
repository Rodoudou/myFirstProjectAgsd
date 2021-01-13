import cloudinary from "cloudinary";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {FicheInscription} from '../models/FicheInscriptionModel.mjs';


export const postFiche = async (req, res)=>{
    const body = res.fields;
    console.log("/fiche-inscription = req.files", req.files);
    console.log("/fiche-inscription = req.fields", req.fields);

    try {
        const obj = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            sex: body.sex,
            date: body.date,
            adresse: body.adresse,
            ville: body.ville,
            codePostal: body.codePostal,
            phone : body.phone,
            activities: body.activities,
            droitImage: body.droitImage,
            certificatM : body.certificatM,
            photo: body.photo,
            autorisation: body.autorisation,
            assurance: body.assurance,
        };
    console.log("OBJ =>", obj);
        const newFichInscription = new FicheInscription({obj});
        await newFichInscription.save();
    
        return res.json(obj)
        
    } catch (error) {
        res.json(400).json({
            error: error.message
        });
    }
    
}

// Uploader plusieurs fichiers
// export const uploadFichiers =  async (req, res) => {
//     console.log("req.files = > /upload",req.files);
//     // les différentes clés des fichiers (file1, file2, file3...)
//     const files = Object.keys(req.files);
//     if (files.length) {
//       const results = {};
//       // on parcourt les fichiers
//       files.forEach(fileKey => {
//         // on utilise les path de chaque fichier (la localisation temporaire du fichier sur le serveur)
//         cloudinary.v2.uploader.upload(
//           req.files[fileKey].path,
//           {
//             // on peut préciser un dossier dans lequel stocker l'image
//             folder: 'some_folder'
//           },
//           (error, result) => {
//             // on enregistre le résultat dans un objet
//             if (error) {
//               results[fileKey] = {
//                 success: false,
//                 error: error,
//               };
//             } else {
//               results[fileKey] = {
//                 success: true,
//                 result: result,
//               };
//             }
//             if (Object.keys(results).length === files.length) {
//               // tous les uploads sont terminés, on peut donc envoyer la réponse au client
//               return res.json(results);
//             }
//           }
//         );
//       });
//     } else {
//       res.send('No file uploaded!');
//     }
//   };