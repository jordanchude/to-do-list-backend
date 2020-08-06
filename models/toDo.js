const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TO DO SCHEMA
const ToDoSchema = new Schema ({
    toDo: [{type: String, required: true}],
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }
}, {timestamps: true});

//EXPORT MODEL
module.exports = mongoose.model('ToDo', ToDoSchema);