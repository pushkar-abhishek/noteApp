 
const express = require("express");
const Note = require("./model/note");
const User = require("../../user-service/src/model/user");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Notes Service" });
});

/**
 * Creating Note against the some user
 */
app.post("/api/v1/note/:user_id", async (req, res) => {
    if(!req.body.title) {
        return res.send(422).send('Provide Note Title')
    }
    const user_id = req.params.user_id;
    const existing_user = User.findById(user_id);
    if(!existing_user) {
        return res.send(406).send('No corresponding user exists')
    }
    const note = await Note.create({title: req.body.title, description: req.body.description, user_id });
    return res.status(200).json({note, message: 'Saved'});
});


/**
 * Delete user's note
 */
app.delete("/api/v1/note/:user_id/:note_id", async(req, res) => {
    const user_id = req.params.user_id;
    const note_id = req.params.note_id;
    const existing_user = User.findById(user_id);
    if(!existing_user) {
        return res.send(406).send('No corresponding user exists')
    }
    await Note.findByIdAndDelete(note_id);
    return res.status(200).json({message: 'Note Deleted'});
});

/**
 * Update user's note
 */
app.put("/api/v1/note/:user_id/:note_id", async(req, res) => {
    const user_id = req.params.user_id;
    const note_id = req.params.note_id;
    const existing_user = User.findById(user_id);
    if(!existing_user) {
        return res.send(406).send('No corresponding user exists')
    }
    const note = await Note.findByIdAndUpdate(note_id,{$set:req.body}, {new: true} )
});

/**
 * Fetch user's notes
 */
app.get("/api/v1/note/:user_id", async(req, res) => {
    const user_id = req.params.user_id;
    const existing_user = User.findById(user_id);
    if(!existing_user) {
        return res.send(406).send('No corresponding user exists')
    }
    const notes = await Note.find({user_id})
    return res.status(200).json(notes);
});

module.exports = app; 