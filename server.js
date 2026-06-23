const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./database/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/votar", (req, res) => {
  const { suspeita } = req.body;

  db.run(
    "INSERT INTO votos (suspeita) VALUES (?)",
    [suspeita],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        sucesso: true,
      });
    }
  );
});

app.get("/resultado", (req, res) => {
  db.all(
    `
    SELECT
      suspeita,
      COUNT(*) as votos
    FROM votos
    GROUP BY suspeita
    `,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});