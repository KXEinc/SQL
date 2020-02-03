const sqlite3 = require("sqlite3");

//init database
const db = new sqlite3.Database("./database.sqlite");

//create new table

/*db.run(
  `CREATE TABLE IF NOT EXISTS Artist (
      id INTEGER NOT NULL  PRIMARY KEY, 
      name TEXT NOT NULL, 
      date_of_birth TEXT NOT NULL, 
      biography TEXT NOT NULL, 
      is_currently_emploed INTEGER DEFAULT 1)`
);
*/
db.run(
  "CREATE TABLE IF NOT EXISTS `Artist` ( " +
    "`id` INTEGER NOT NULL, " +
    "`name` TEXT NOT NULL, " +
    "`date_of_birth` TEXT NOT NULL, " +
    "`biography` TEXT NOT NULL, " +
    "`is_currently_employed` INTEGER NOT NULL DEFAULT 1, " +
    "PRIMARY KEY(`id`) )"
);
