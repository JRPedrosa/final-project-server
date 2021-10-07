const mongoose = require("mongoose");

const arpeggioSchema = new mongoose.Schema({
    name: String,
    possibleScales: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

const Arpeggio = mongoose.model("Arpeggio", arpeggioSchema);

module.exports = Arpeggio;