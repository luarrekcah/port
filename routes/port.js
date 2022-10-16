const express = require("express"),
  router = express.Router();

const allData = require("../data");

router.get("/:id", (req, res, next) => {
  const item = allData.portfolio.find((item) => item.id === req.params.id);

  const data = {
    og: {
      title: item.title,
      banner: item.photos[0],
      url: allData.default.url + "port/" + item.id,
    },
    blog: allData.blog,
    services: allData.services,
    defaultConfig: allData.default,
    item,
    user: req.user
  };

  res.render("portDetails", data);
});

module.exports = router;
