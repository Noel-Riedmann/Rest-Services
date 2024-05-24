const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db");

const data = [
  { name: "luca", age: 18 },
  { name: "noel", age: 18 },
  { name: "jonas", age: 19 },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/people", async (req, res) => {
  try {
    let result = await db.query("select * from people");
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/people/:id", (req, res) => {
  let id = req.params.id;
  res.send(data[id]);
});

app.delete("/people/:id", (req, res) => {
  let id = req.params.id;
  data.splice[(id, 1)];
  res.send(data);
});

app.post("/people", async (req, res) => {
  let people = req.body
  let sql = "insert into people(firstname, lastname) values(?,?)";
  try {
    let result = await db.query(sql,[people.firstname, people.lastname]);
    res.send(result)
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
