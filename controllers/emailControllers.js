import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const API_KEY = 'f3be2af94df1f59e0ca6f438564466af-ea44b6dc-4115538e';
const DOMAIN = 'sandbox399bda58188e4154a03a8ae7b3cf3a15.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
const myAddMail = 'agsdcombat@gmail.com';


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