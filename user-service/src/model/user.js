const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: { validator: (k) => { return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(k); } },
        message: '{VALUE} is not valid email',
    },
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);