import mongoose from "mongoose";
import bcrypt from "bcrypt";

 const UserShema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

// Pré Hook - Avant d'enregistrer dans Mongo
UserShema.pre('save',async function(next){
    const user = this;

    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;

    next()
})

// Verifier le passord
UserShema.methods.isValidPassword = async function(password){
    const user = this;

    const isSame = await bcrypt.compare(password, user.password);

    return isSame; // return true ou false
}


const UserModel = mongoose.model('user', UserShema)

export default UserModel;