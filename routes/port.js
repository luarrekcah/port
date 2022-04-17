const express = require("express"),
  router = express.Router();

  const allData = require("../data");

router.get("/:id", (req, res, next) => {
  
const data = {
  title: "AAA",
  banner: "",
  url: "",
  item: allData.portfolio.find((item) => item.id === req.params.id)
};

  res.render("portDetails", data);
});


module.exports = router;
