import passport from "passport";
import { Strategy } from "passport-local";

import UserModel from "../models/userModel.mjs";

passport.use(
  "signup",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;
