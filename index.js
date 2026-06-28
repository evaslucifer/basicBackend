require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get("/twitter", (req, res) => {
  res.send(`<h1>himanish@gmail.com</h>`);
});

app.get("/login", (req, res) => {
  res.send(`<h1>enter your login details</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
