const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const data = [
  { name: "luca", age: 18 },
  { name: "noel", age: 18 },
  { name: "jonas", age: 19 },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/people", (req, res) => {
  res.send(data);
});

app.get("/people/:id", (req, res) => {
  let id = req.params.id;
  res.send(data[id]);
});

app.delete("/people/:id", (req, res) => {
  let id = req.params.id;
  data.splice[id,1];
  res.send(data);
});

app.post("/people", (req, res) => {
  data.push(req.body);
  res.send(data);
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
