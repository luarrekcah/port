const express = require("express"),
  router = express.Router();

const allData = require("../../data");

const passportFacebook = require("../../auth/facebook"),
  passportTwitter = require("../../auth/twitter"),
  passportGoogle = require("../../auth/google"),
  passportGitHub = require("../../auth/github"),
  passportDiscord = require("../../auth/discord");

router.get("/", (req, res, next) => {
  res.send("Acho que você digitou o link errado amigo.");
});

router.get("/login", (req, res, next) => {
  const data = {
    og: {
      title: "Login - RR",
      banner: "",
      url: allData.default.url,
    },
    port: allData.portfolio,
    blog: allData.blog,
    services: allData.services,
    defaultConfig: allData.default,
    user: req.user,
  };

  res.render("login", data);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/default", (req, res) => {});

router.get(
  "/google",
  passportGoogle.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

router.get(
  "/google/callback",
  passportGoogle.authenticate("google", { failureRedirect: "/auth/login" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("/discord", passportDiscord.authenticate("discord"));

router.get(
  "/discord/callback",
  passportDiscord.authenticate("discord", {
    failureRedirect: "/auth/login",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

/*

router.get("/facebook", passportFacebook.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passportFacebook.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/users");
  }
);

router.get("/twitter", passportTwitter.authenticate("twitter"));

router.get(
  "/twitter/callback",
  passportTwitter.authenticate("twitter", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/users");
  }
);


router.get(
  "/github",
  passportGitHub.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passportGitHub.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/users");
  }
);*/

module.exports = router;
