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
const db = mongoose.connection
const mongoConfigObject = {useNewUrlParser: true, useUnifiedTopology: true};

//CONNECT TO DATABASE
mongoose.connect(mongoURI, mongoConfigObject, () => {
    console.log("Connected to mongo!");
})

//CONNECTION MESSAGES
db.on("error", (err) => console.log(err.message + ", is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected!"));

//CORS SECURITY CONFIGURATIONS
const whitelist = ["http://localhost:3000/", "http://example2.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};

//MIDDLEWARE
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
//app.use("/", toDoRouter);

//ROUTES
//TEST ROUTE
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});