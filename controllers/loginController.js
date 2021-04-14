// import User from "../models/userModel.js";
// import { generateTokenForUser } from "../utils/jwt.utils.js";
//  export const loginRoute =  async (err, user) => {
//     const userData = await User.findOne({ email: user.email });
//     console.log("userData from login rout", userData);
//     try {
//       if (err || !user) {
//         const error = new Error("Une erreur est survenue.");
//         return next(error);
//       }
//       req.login(user, { session: false }, async (error) => {
//         if (error) return next(error);
//         console.log(user);
//         const body = {
//           id: user._id,
//           email: user.email,
//           username: user.username,
//           token: generateTokenForUser(user),
//         };
//         res.json(body);
//       });
//     } catch (error) {
//       return next(error);
//     }
//   }