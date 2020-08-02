const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//SCHEMA
const EmployeeSchema = new Schema ({
    name: String,
    title: String,
    photo: String,
    toDos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ToDo'
        }
    ]
}, {timestamps: true});

let Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;