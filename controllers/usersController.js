// Enregister un nouvel User dans la BDD et creation d'un password
export const addUser =  async (req, res, next) => {  
    const body = req.body
    console.log("body dans userControllers",body);
    res.json(body)
       
    
    }