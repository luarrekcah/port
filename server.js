const createError = require("http-errors"),
  express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  session = require("express-session"),
  passport = require("passport");

const app = express();

require('./database.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public/")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "s3cr3t",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 * 24 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes")(app);

const listener = app.listen(process.env.PORT, function () {
  console.log(`Porta: ${listener.address().port}`);
});

module.exports = app;
