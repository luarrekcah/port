const express = require("express"),
  router = express.Router();

const data = {
  title: "XXXX",
  banner: "",
  url: "",
};

router.get("/", (req, res, next) => {
  res.render("blogSingle", data);
});

module.exports = router;
