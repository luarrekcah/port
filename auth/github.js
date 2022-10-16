var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "e7b10decd2ed4ef13816",
    clientSecret: "bb073a53914d014f328de98ad9fe5a3cff366912",
    callbackURL: process.env.url + "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
  }
));

module.exports = passport;