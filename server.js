//require all pakages
const express = require("express");
const app = express();
const loger = require("morgan");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");
const cors = require("cors");
//require router
const apiRouter = require("./api/api.js");

//set up port
const PORT = process.env.PORT || 4000;

//initialize all middleware
if (process.env.NODE_ENV === "development") {
  // only use in development
  app.use(errorhandler());
}
app.use(loger("dev"));
app.use(bodyParser.json());
app.use(cors());

//init router on a path /api
app.use("/api", apiRouter);

//start server
app.listen(PORT, () => {
  console.log(`Server listening on a port ${PORT}`);
});

module.exports = app;
