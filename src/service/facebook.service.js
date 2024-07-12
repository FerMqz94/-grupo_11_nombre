// const Strategy = require('passport-facebook').Strategy;
// const passport = require('passport');

// const clientID = process.env.FACEBOOK_CLIENT_ID;
// const clientSecret = process.env.FACEBOOK_SECRET_ID;
// const callbackURL = process.env.FACEBOOK_CALLBACK;

// const strategy = new Strategy({
//     clientID,
//     clientSecret,
//     callbackURL,
// }, (accessToken, refreshToken, profile, cb) => {
//     cb(null, profile)
// })

// const configServiceFacebook = () => passport.use(strategy);
// module.exports = {
//     configServiceFacebook
// }