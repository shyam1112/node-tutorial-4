
require('dotenv').config({path:`.env.${process.env.NODE_ENV}`});
const express = require('express');
const app = express();
app.use(express.json());
require('../db/config')
const userValidation = require('./routes/userValidation');

app.use('/users',userValidation);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Server is running on port : 3000");
})