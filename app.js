const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.pluralize(null);
mongoose.connect(`${process.env.MONGO_EXPRESS_STRING}`, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const companiesRouter = require("./routes/company");
const staffRouter = require("./routes/staff");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/company", companiesRouter);
app.use("/staff", staffRouter);

module.exports = app;
