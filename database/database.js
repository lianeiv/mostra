const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/killer.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS votos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      suspeita TEXT NOT NULL,
      data_voto DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;