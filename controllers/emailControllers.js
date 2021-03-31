import {mailgun} from '../mailgun.js'
const sendEmail = (from,to, subject,text) => {
  
  const myAddMail = process.env.MY_ADD_MAIL;
  const data = {
    from,
    to: myAddMail,
    subject,
    text,
  };
  
  
  console.log("data =>", data);
  return mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
};



// Route Post recuperer data du form contact côté front puis envoyer via MailGun
export const email = async (req, res, next)=>{
  const body = req.body
  console.log("body email from front", body);
  try {
    await sendEmail(body.name,body.email, body.subject, body.message )
  res.send(body)
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}