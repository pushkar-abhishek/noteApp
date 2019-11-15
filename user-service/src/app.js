 
const express = require("express");
const User = require("./model/user");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Users Service" });
});

/**
 * Create new user
 */
app.post("/api/v1/user", async (req, res) => {
    const existing_user = await User.find({email: req.body.email}).lean();
    if(!existing_user) {
        const user = await User.create({name:req.body.name, email: req.body.email});
        return res.status(200).json(user);
    }
    return  res.status(409).send('User email already in use, Please use another !');
});

module.exports = app;