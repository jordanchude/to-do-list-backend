const mongoose = require('mongoose');
const db = require('../db/index');
const Employee = require('../models/employee');
const ToDo = require('../models/toDo');

const toDoSeed = [
    {
        toDo: "Be a boss",
        employee: "Jordan Williams"
    }
]

const addToDos = async () => {
    await Promise.all(toDoSeed.map(async toDoToAdd => {
        //find artist document with matching name
        let employee = await Employee.findOne({name: toDoToAdd.employee});
        
        //update object with employee ID
        toDoToAdd.employee = employee._id;

        //create to do
        const toDo = await ToDo.create(toDoToAdd);
        
        await employee.toDos.push(toDo._id);
        await employee.save();
        console.log(employee);
    }))
    db.close()
}
addToDos();