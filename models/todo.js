const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    overskrift: {
        type: String,
        required: true
    },
    indhold: {
        type: String,
        required: false
    },
    prioritet: {
        type: String,
        required: false
    },
    start: {
        type: Date,
        requiered: true,
        default: Date.now
    },
    slut: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("todo", todoSchema, 'todo');
