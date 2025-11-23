require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();

const uri = process.env.MONGO_URL;
const port = process.env.port || 8080;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    mongoose.connect(uri);
    console.log("Connected to DB");
})