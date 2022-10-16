const indexRouter = require("./routes/index"),
  blogSingleRouter = require("./routes/blogSingle"),
  portRouter = require("./routes/port"),
  userRouter = require("./routes/user");

//auth
const authRouter = require("./routes/auth");

const authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/login");
};

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/blog", blogSingleRouter);
  app.use("/port", portRouter);
  app.use("/auth", authRouter);
  app.use("/dashboard", authenticationMiddleware, userRouter);
};
