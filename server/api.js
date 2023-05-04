const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3300;
//const  pool = "./utilis/dbConfig";
//require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "spellingDb",
  password: "CYF123",
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/words", async (req, res) => {
  try {
    const allWords = await pool.query("select * from year3and4");
    res.status(200).json(allWords.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get(
  "/sessions/:user_id/:session_id/:correctAnsers/:wrongAnsers",
  async (req, res) => {
    const { user_id, session_id, correctAnsers, wrongAnsers } = req.params;

    try {
      pool.query("insert into");
    } catch (error) {}
  }
);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log("Server is running on port 3300");
});
