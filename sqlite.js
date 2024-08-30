const sqlite3 = require("sqlite3").verbose();
const sqlite = new sqlite3.Database("./bin/ychurch.db");



module.exports = sqlite;