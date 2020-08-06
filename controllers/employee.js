const mongoose = require('mongoose');
const db = mongoose.connection;

//IMPORTED MODELS
const Employee = require('../models/employee');
const ToDo = require('../models/toDo');

//find all employees
const index = async (req, res) => {
    try {
        //search for all employees and populate their toDos
        const employees = await Employee.find({}).populate('toDos');
        //set status to 200 and send employees as json
        res.status(200).json(employees);
    } catch(error) {
        //set status to 400 and send error
        res.status(400).send(error);
    }
}

//create employee
const createEmployee = async (req, res) => {
    try {
        //create new employee based on req body
        const newEmployee = await Employee.create(req.body);
        //find all employees after new employee is created
        const allEmployees = await Employee.find({});
        //set status to 200 and send updated json
        res.status(200).json(allEmployees);
    } catch(error) {
        res.status(400).send(error);
    }
}

//update employee
const updateEmployee = async (req, res) => {
    try {
        //update employee by pulling id and ensuring that the update is new
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("toDos");
        //find all employees to show updated employee
        const allEmployees = await Employee.find({});
        //set status to 200 and send json of all employees
        res.status(200).json(allEmployees);
    } catch(error) {
        //set status to 400 and send error
        res.status(400).send(error);
    }
}

//delete employee
const deleteEmployee = async (req, res) => {
    try {
        //find employee by id and delete it
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        //find all employees after employee is deleted
        const allEmployees = await Employee.find({}).populate("toDos");
        //set status to 200 and send updated list of employees
        res.status(200).json(allEmployees);
    } catch(error) {
        //set status to 400 and send error
        res.status(400).send(error);
    }
}

//create to do
const createToDo = async (req, res) => {
    try {
        //create new to do
        const newToDo = await ToDo.create(req.body);
        //find employee based on id
        const employee = await Employee.findOne({_id: newToDo.employee}).populate("toDos");
        //push new to do to employee to dos array
        await employee.toDos.push(newToDo);
        //save employee
        await employee.save();
        //updatte status to 200 and send employee as json to database
        res.status(200).json(employee);
    } catch(error) {
        //set status to 400 and send error
        res.status(400).send(error);
    }
}

//delete to do
const deleteToDo = async (req, res) => {
    try {
        //find and delete to do
        const deletedToDo = await ToDo.findByIdAndDelete(req.params.id);
        //find all employees after deleted to do
        const allEmployees = await Employee.find({}).populate('toDos');
        //set status to 200 and send update json of all employees
        res.status(200).json(allEmployees);
    } catch(error) {
        //set status to 400 and send error
        res.status(400).send(error);
    }
}

//export each function
module.exports = {
    index,
    createEmployee, 
    createToDo, 
    updateEmployee, 
    deleteEmployee,
    deleteToDo
};