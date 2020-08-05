const mongoose = require('mongoose');
const db = mongoose.connection;

//IMPORTED MODELS
const Employee = require('../models/employee');
const ToDo = require('../models/toDo');

//find all employees
const index = async (req, res) => {
    try {
        const employees = await Employee.find({}).populate('toDos');
        res.status(200).json(employees);
        console.log(employees);
    } catch(error) {
        res.status(400).send(error);
    }
}

//show employee by ID
const show = async (req, res) => {
    try {
        const oneEmployee = await Employee.find({_id: req.params.id}).populate('toDos');
        res.status(200).json(oneEmployee);
    } catch(error) {
        res.status(400).send(error);
    }
}

//create employee
const createEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        const allEmployees = await Employee.find({});
        res.status(200).json(allEmployees);
    } catch(error) {
        res.status(400).send(error);
    }
}

//update employee
const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("toDos");
        const allEmployees = await Employee.find({});
        res.status(200).json(allEmployees);
    } catch(error) {
        res.status(400).send(error);
    }
}

//delete employee
const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        const allEmployees = await Employee.find({}).populate("toDos");
        res.status(200).json(allEmployees);
    } catch(error) {
        res.status(400).send(error);
    }
}

//create to do
const createToDo = async (req, res) => {
    try {
        const newToDo = await ToDo.create(req.body);
        const employee = await Employee.findOne({_id: newToDo.employee}).populate("toDos");
        await employee.toDos.push(newToDo);
        await employee.save();
        res.status(200).json(employee);
    } catch(error) {
        res.status(400).send(error);
    }
}

//delete to do
const deleteToDo = async (req, res) => {
    try {
        const deletedToDo = await ToDo.findByIdAndDelete(req.params.id);
        const allEmployees = await Employee.find({}).populate('toDos');
        res.status(200).json(allEmployees);
    } catch(error) {
        res.status(400).send(error);
    }
}

module.exports = {
    index, 
    show, 
    createEmployee, 
    createToDo, 
    updateEmployee, 
    deleteEmployee,
    deleteToDo
};