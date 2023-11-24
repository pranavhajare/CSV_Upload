/** ------------------ IMPORTING PACKAGE ------------------ **/
const mongoose = require("mongoose");


/** ------------------ MAKING CONNECTION ------------------ **/

mongoose.connect('mongodb://0.0.0.0:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", (error) => {
    console.error("Error connecting to DB:", error);
});

// when db connects successfully
db.once("open", function () {
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;