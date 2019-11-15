const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/noteApp");

app.listen(7070, () => {
  console.log("running on port 3000");
  console.log("------------NOTE SERVICE--------------");
});