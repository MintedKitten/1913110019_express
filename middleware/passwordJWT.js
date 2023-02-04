const passport = require("passport");
const { JWT_SECRET } = require("../config");
const { user } = require("../models/user");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";
passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const queryuser = await user.findById(jwt_payload.id);
      if (!queryuser) {
        return done(new Error("User cannot be found."), null);
      } else {
        return done(null, queryuser);
      }
    } catch (error) {
      done(error);
    }
  })
);

module.exports = { isLogin: passport.authenticate("jwt", { session: false }) };
