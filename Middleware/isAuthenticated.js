import User from '../models/userModel.js';

export const isAuthenticated = async(req,res,next)=>{
console.log("req isAuth", req);
    if(req.headers.authorization){
        const user = await User.findOne({
            token:req.headers.authorization.replace("Bearer ","")
        });

        if(!user){
            return res.status(401).json({error1:"Unauthorized => type error = 401"});
        }else{
            req.user = user;

            return next();
        }
    } else{
        return res.status(401).json({error2 : "Unauthorized => type error = 401"});
    }

};
