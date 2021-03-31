import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY_MAILGUN;
const DOMAIN = process.env.DOMAIN;
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
const myAddMail = process.env.MY_ADD_MAIL;



// Route Post recuperer data du form contact côté front puis envoyer via MailGun
export const getPost = async(req, res)=>{
  // console.log("req.fields", req.fields);
    
    const data = {
        from: ` AGSD COMBAT User : <${req.body.email}>`,
        to: myAddMail,
        subject: `${req.body.subject}`,
        text: `${req.body.message}`
    };
    console.log("data.from =>", data.from);
    console.log("data.to =>", data.to);
    console.log("data.subject =>", data.subject);
    console.log("data.text =>", data.text);

   await res.send(req.body)
   mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
}