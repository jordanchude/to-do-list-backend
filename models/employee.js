//IMPORT CONNECTION
const mongoose = require('../db/connection');

//IMPORT SCHEMA AND MODEL
const {Schema, model} = require('mongoose');

//SCHEMA
const EmployeeSchema = new Schema ({
    name: String,
    title: String,
    toDos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ToDo'
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('Employee', EmployeeSchema);