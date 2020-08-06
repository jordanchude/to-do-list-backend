//require mongoose
const mongoose =  require('mongoose');

//use environment URI if available
let MONGODB_URI = "mongodb+srv://user:password12345@cluster0.flrht.mongodb.net/employeeToDos?retryWrites=true&w=majority"

//connect to database
mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

//connect messaging
db.on("error", (err) => console.log(err.message + "\nIs Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

module.exports = db;