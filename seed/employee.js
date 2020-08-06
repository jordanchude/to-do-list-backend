//dependencies
const mongoose = require('mongoose');
const Employee = require('../models/employee');
const mongoURI = process.env.mongoURI;
const db = require('../db/index');

//employee seed
const employeeSeed = [
    {
        name: "Jordan Williams",
        title: "CEO",
        photo: "https://res.cloudinary.com/dpjdvsigb/image/upload/v1594764618/Jordan_Chude_Williams_Press_Photo_han403.jpg"
    }
];

//insert employee seed to database
Employee.insertMany(employeeSeed, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
    db.close();
});