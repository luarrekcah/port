/*var passport = require("passport"),
  TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/User");
const { getDatabase, ref, set, onValue } = require("firebase/database");

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  /*User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });*/
/*
  const db = getDatabase();
  const users = ref(db, "usersWebsite");
  onValue(users, (snapshot) => {
    let allUsers = snapshot.val();
    
    if(allUsers === null || allUsers === undefined) return;

    const findUserById = (id) => {
      return allUsers.find((item) => item.userid === id);
    };

    fn(null, findUserById(id.doc._id));
  });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: "nmbk1uqKB0rbWjBxrPv9iksEf",
      consumerSecret: "QeBlJHanPy232ZbOhyPisfI8hLLUVMujXjuI7Sz0Ym4o6m7eGF",
      callbackURL: process.env.url + "/auth/twitter/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        { name: profile.displayName },
        { name: profile.displayName, userid: profile.id },
        function (err, user) {
          if (err) {
            console.log(err);
            return done(err);
          }
          done(null, user);
        }
      );
    }
  )
);

module.exports = passport;

*/
