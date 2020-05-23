const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config");

const harvested = [];
const app = express();

// ################################################ SERVER CONFIGURATION ####################################################

app.enable("trust proxy", 1);
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "static")));

// ################################################ SERVER ROUTE #########################################################

app.get("/", (req, res, next) => {
  res.render("pages/index", {
    site: config.site,
    harvested,
  });
});

app.post("/submit", (req, res, next) => {
  if (req.body.token) {
    harvested.push(req.body.token);
  }
  return next();
});

// ################################################ EXPORT APP #########################################################

module.exports = app;
