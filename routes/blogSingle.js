const express = require("express"),
  router = express.Router();

const allData = require("../data");

router.get("/:id", (req, res, next) => {
  const post = allData.blog.find((item) => item.id === req.params.id);

  const data = {
    og: {
      title: post.title,
      banner: post.banner,
      url: allData.default.url + "blog/" + post.id,
    },
    port: allData.portfolio,
    blog: allData.blog,
    services: allData.services,
    defaultConfig: allData.default,
    post,
    allPosts: allData.blog,
    user:req.user
  };

  res.render("blogSingle", data);
});

module.exports = router;
