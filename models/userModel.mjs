import mongoose from "mongoose";

export const User = mongoose.model("User", {
    email: {
        type: String,
        unique: true
    },
    token: String,
    hash: String,
    salt: String,
    account: {
        username: {
            type: String,
            required: true
        }
    }
});
