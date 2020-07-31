//DEPENDENCIES
require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require("cors");

//GLOBAL VARIABLES
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const mongoURI = process.env.mongoURI;
//const db = mongoose.connection
//const mongoConfigObject = {useNewURLParser: true, useUnifiedTopology: true};

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});