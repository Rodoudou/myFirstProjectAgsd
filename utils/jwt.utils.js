import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken';

export const generateTokenForUser =(userData)=>{
    console.log("userData from generateTokenForUser ",userData);
    return jwt.sign({
        userId: userData.id,
        isAdmin: userData.isAdmin
    },
    process.env.JWT_SIGN_SECRET,
    {
        expiresIn: '1h'
    })
}