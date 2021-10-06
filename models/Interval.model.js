const mongoose = require("mongoose");

const intervalSchema = new mongoose.Schema({
    name: String,
    possibleIntervals: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    direction: String,
});

const Interval = mongoose.model("Interval", intervalSchema);

module.exports = Interval;