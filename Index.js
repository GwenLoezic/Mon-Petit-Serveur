const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({message : "Welcome Home"});
});

app.get("/createget", (req, res) => {
    res.json({message : "Create get"});
  });

app.post("/createpost", (req, res) => {
    res.json({message : "Create post"});
  });

app.listen(3000, () => {
  console.log("Welcome to the Darkside");
});