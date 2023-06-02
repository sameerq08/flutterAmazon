const express = require("express");
const mongoose = require('mongoose');

// Imports from Other Files
//const authRouter = express.Router();

const authRouter = require("./routes/auth.js");
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://sameer:Cisco%4012345@cluster0.x1bhzdh.mongodb.net/"

// Middleware
app.use(express.json());
app.use(authRouter);

//mongoose.connect(DB)
mongoose.connect(DB).then(() => {
    console.log("Connection Sucess");
}).catch((e) => {
    console.log(e);
});


app.listen(PORT, "0.0.0.0", () => {
    console.log('connected at port ');
})