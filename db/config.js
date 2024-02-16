const mongoose = require('mongoose');

const db = 'mongodb+srv://shyamsardhara1112:shyamsardhara1112@cluster0.jvomjqy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log("Databse Connected.");
}).catch((err)=>{
    console.log(err);
})