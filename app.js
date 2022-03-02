require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");
const patch = require("./routes/patch");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Acceess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,PATCH");
    return res.status(200).json({});
  }
  next();
});


app.use("/auth", auth);
app.use("/patch", patch);
// Handle routing errors
app.use((req, res, next) => {
  const error = new Error("resource not found");
  error.status = 404;
  next(error);
});
// handle request errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});


module.exports = app;
