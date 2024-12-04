// model ressources
const mongoose = require("mongoose");

const ressourcesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: true,
    }
});
const Ressources = mongoose.model("Ressources", ressourcesSchema);

module.exports = Ressources;