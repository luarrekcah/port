const express = require("express"),
  router = express.Router();

const allData = require("../data");

router.get("/pagamento/:id", (req, res, next) => {
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

  res.render("cobrar", data);
});

module.exports = router;
