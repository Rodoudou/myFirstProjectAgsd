import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {FicheInscription} from '../models/FicheInscriptionModel.mjs';

export const postFiche = async (req, res)=>{
    const body = req.fields;
    console.log("/fiche-inscription = req.files", req.files);
    console.log("/fiche-inscription = req.fields", req.fields);

    const newFichInscription = new FicheInscription({
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
        assurance: body.assurance
    });
    console.log('newFichInscription._id =>',newFichInscription._id,)
    await newFichInscription.save();

    return res.json(
        req.files
    )
    
    // await res.send(req.body)
}