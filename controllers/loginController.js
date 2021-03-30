
// export const loginRoute =  async (err, user)=>{
//     try {
//       if(err || !user){
//         const error = new Error('Une erreur est survenue.')
//         return next(error);
//       }
//       req.login(user, {session:false}, async error =>{
//         if(error) return next(error)

//         const body = {id: user._id, email: user.email}
//         res.json(body)
//       })
//     } catch (error) {
//       return next(error)
//     }
//   }