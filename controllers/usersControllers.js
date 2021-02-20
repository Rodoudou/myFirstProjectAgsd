// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser =  async (req, res, next) => {
const body = req.fields;
console.log(body);
res.json({
    message: "Signup OK!",
    user: body.username
})
   

}