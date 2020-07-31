//IMPORT CONNECTION
const mongoose = require('../db/connection');

//IMPORT SCHEMA AND MODEL
const {Schema, model} = require('mongoose');

const ToDoSchema = new Schema ({
    toDo: {type: String, required: true},
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }
})

module.exports = mongoose.model('ToDo', ToDoSchema);