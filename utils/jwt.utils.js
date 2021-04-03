import jwt from 'jsonwebtoken';
const JWT_SIGN_SECRET = 'v64h64vt3h46bbj4hv4hv654ty65h4bthv64h64bgh64fhcr6g464trr'

export const generateTokenForUser =(userData)=>{
    return jwt.sign({
        userId: userData.id,
        isAdmin: userData.isAdmin
    },
    JWT_SIGN_SECRET,
    {
        expiresIn: '1h'
    })
}