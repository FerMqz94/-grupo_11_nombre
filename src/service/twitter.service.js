const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const db = require("../db/models");


const strategy = new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK,
  // scope: ['profile', 'email']
}, (token, tokenSecret, profile, cb) => {
  // console.log('Token:', token);
  // console.log('Token Secret:', tokenSecret);
  // console.log('Profile:', profile);


  cb(null, profile)}
);


  const configServiceTwitter = () => passport.use(strategy);

module.exports = {
  configServiceTwitter
}