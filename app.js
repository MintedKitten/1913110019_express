const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.post("/api/Hello/:name", (req, res, next) => {
  return res
    .status(200)
    .json({ message: "Hello! Your name is " + req.params.name });
});
app.get("/api/Hello", (req, res, next) => {
  return res.status(200).json({ message: "Hello!" });
});

module.exports = app;
