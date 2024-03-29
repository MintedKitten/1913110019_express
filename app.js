const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const { DBURI } = require("./config");
const passport = require("passport");

mongoose.pluralize(null);
mongoose.connect(`${DBURI}`, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const companiesRouter = require("./routes/company");
const staffRouter = require("./routes/staff");
const shopRouter = require("./routes/shop");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(logger("dev"));
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/company", companiesRouter);
app.use("/staff", staffRouter);
app.use("/shop", shopRouter);

app.use(errorHandler);

module.exports = app;
