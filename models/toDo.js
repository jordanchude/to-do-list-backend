const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema ({
    toDo: [{type: String, required: true}],
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }
}, {timestamps: true});

module.exports = mongoose.model('ToDo', ToDoSchema);