const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const middlewares = [
  express.json(),
  express.urlencoded({ extended: true }),
  express.static("public"),
  cors(),
  helmet(),
  morgan("dev"),
  compression(),
  cookieParser(),
];

module.exports = middlewares;
