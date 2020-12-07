export const postFiche = async (req, res)=>{
    console.log("/fiche-inscription", req.body);
    await res.send(req.body)
}