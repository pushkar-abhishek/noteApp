const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect(DB_URI,  { useNewUrlParser: true }, (err, sucess) => {
  console.log(err, sucess);
  
});

app.listen(4000, () => {
  console.log("running on port 4000");
  console.log("------------USER SERVICE--------------");
});