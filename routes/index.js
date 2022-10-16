const express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  xml = fs.readFileSync(__dirname + "/../sitemap.xml");

const allData = require("../data");

router.get("/", (req, res, next) => {
  const data = {
    og: {
      title: "Página Principal",
      banner: "",
      url: allData.default.url,
    },
    port: allData.portfolio,
    blog: allData.blog,
    services: allData.services,
    defaultConfig: allData.default,
    user: req.user,
  };

  res.render("index", data);
});

router.get("/sitemap.xml", function (req, res, next) {
  res.set("Content-Type", "text/xml");
  res.send(xml);
});

router.get("/coc", function (req, res, next) {
  res.redirect("https://discord.gg/Etw9KMxuxd")
});

module.exports = router;
