require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { notFoundError, internalServerError } = require("./middlewares/errors");
const snippetRouter = require("./routers/snippetRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use("/snippets", snippetRouter);

app.use(notFoundError);
app.use(internalServerError);

module.exports = app;
