const express = require("express");
const app = express();

const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/noteApp");

app.listen(5050, () => {
  console.log("running on port 3000");
  console.log("------------Email SERVICE--------------");
});