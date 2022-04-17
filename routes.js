const indexRouter = require("./routes/index"),
blogSingleRouter = require("./routes/blogSingle"),
portRouter = require("./routes/port");

module.exports = app => {
    app.use("/", indexRouter)
    app.use("/blog", blogSingleRouter)
    app.use("/port", portRouter)
};