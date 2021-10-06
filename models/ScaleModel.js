const mongoose = require("mongoose");

const scaleSchema = new mongoose.Schema({
    name: String,
    possibleScales: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

const Scale = mongoose.model("Scale", scaleSchema);

module.exports = Scale;