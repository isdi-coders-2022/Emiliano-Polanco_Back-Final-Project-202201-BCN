require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

module.exports = app;
