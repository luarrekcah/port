const passport = require("passport"),
  DiscordStrategy = require("passport-discord").Strategy,
{ getDatabase, ref, set, onValue } = require("firebase/database");

const scopes = ["identify", "email", 'guilds'];

passport.use(
  new DiscordStrategy(
    {
      clientID: "968882586493546586",
      clientSecret: "I8jGDaDSd0cLGg5cIkeB1uUBt-ZsgdfA",
      callbackURL: process.env.url + "/auth/discord/callback",
      scope: scopes,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      
  const db = getDatabase();
      const users = ref(db, "usersWebsite");
      onValue(users, (snapshot) => {
        let allUsers = snapshot.val();
        if (allUsers == null) {
          allUsers = [];
        }
        const findUserById = (id) => {
          return allUsers.find((item) => item.userid === id);
        };

        passport.serializeUser((user, done) => {
          done(null, user.userid);
        });

        passport.deserializeUser((id, done) => {
          try {
            const user = findUserById(id);
            done(null, user);
          } catch (err) {
            console.log(err);
            return done(err, null);
          }
        });

        const user = {
          userid: profile.id,
          name: profile.username,
          fullName: profile.username + "#" + profile.discriminator,
          photo: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png?size=2048`,
          email: profile.email,
          registeredAt: profile.fetchedAt
        };

        if (findUserById(user.userid)) {
          try {
            return done(null, user);
          } catch (err) {
            console.log(err);
            return done(err, false);
          }
        } else {
          allUsers.push(user);

          set(ref(db, "usersWebsite"), allUsers).then(() => {
            console.log("Registro atualizado");
            try {
              return done(null, user);
            } catch (err) {
              console.log(err);
              return done(err, false);
            }
          });
        }
      });
    }
  )
);


module.exports = passport;