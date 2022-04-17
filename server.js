const createError = require("http-errors"),
  express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan");
 
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public/")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

const listener = app.listen(8888, function () {
  console.log(`Porta: ${listener.address().port}`);
});

module.exports = app;
