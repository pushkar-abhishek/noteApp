const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user_id: {
    type: String,
    ref: 'User',
},
  description: { type: String},
  title: { type: String, required: true}
},
{
    timestamps: true
});

module.exports = mongoose.model("Note", NoteSchema);