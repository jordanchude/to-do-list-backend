const express = require("express");
const router = express.Router();
const {index, show, createEmployee, createToDo, updateEmployee, deleteEmployee, deleteToDo} = require('../controllers/employee');

//employee routes
router.get('/', index);
router.get('/:id', show);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee)

//to do routes
router.post('/todo', createToDo);
router.delete('/todo/:id', deleteToDo);

module.exports = router;