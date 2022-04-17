const express = require("express"),
  router = express.Router();

const allData = require("../data");

const data = {
  title: "Página Principal",
  banner: "",
  url: "",
  port: allData.portfolio,
  blog: allData.blog,
  services: allData.services,
  defaultConfig: allData.default
};

router.get("/", (req, res, next) => {
  res.render("index", data);
});

module.exports = router;
