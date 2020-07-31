const mongoose = require('mongoose');
const Employee = require('../models/employee');
const seed = require("./seedData.json");
const db = require('./connection.js');


Employee.create(seed, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
    db.close();
});