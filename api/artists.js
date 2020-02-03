const artistRouter = require("express").Router();
const sqlite3 = require("sqlite3");

console.log(process.env.TEST_DATABASE);

const PATH = "./database.sqlite";

const db = new sqlite3.Database(
  process.env.TEST_DATABASE || PATH,
  err => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to the in-memory SQlite database.");
  }
);


artistRouter.get("/", (req, res, next) => {
  db.all(
    "SELECT * FROM Artist WHERE is_currently_employed = 1",
    (err, artists) => {
      console.log(artists);
      if (err) {
        next(err);
      } else {
        res.status(200).json({ artists: artists });
      }
    }
  );
});

module.exports = artistRouter;
