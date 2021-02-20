import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//importation des models
import Usermodel from '../models/userModel.js';


//parametres pour crypter le password
const uid2 = require("uid2");
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');



//route  login
export const login =  async (req, res) => {
    // Pour afficher les données reçues :
    const body = req.fields;
    console.log("body login =>",body);
    
    try {
        // on cherche le user qui veut se connecter
        const user = await Usermodel.findOne({
            email: body.email
        });

    if (user) {
            // si le hash du mot de passe qu'il vient de saisir est le même que le hash enregistré en BDD lors de son inscription, alors c'est bon !
            if (SHA256(body.password + user.salt).toString(encBase64) === user.hash) {
                return res.json({
                    _id: user._id,
                    token: user.token,
                    email: user.email,
                    account: {
                        username: user.account.username,
                        phone: user.account.phone
                    }
                });

            } else {
                // sinon, il n'est pas autorisé à se connecter
                res.status(401).json({
                    error: "Unauthorized"
                });
            }
        } else {
            res.json({
                error: "User not found"
            });
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};
