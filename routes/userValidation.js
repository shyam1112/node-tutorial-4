const express = require('express');
const app = express();
app.use(express.json());

const User = require('../../db/userSchema');

const router = express.Router();

router.post('/add',async(req,res)=>{
    try{

        let user = new User(req.body);
        let result = await user.save();
        if(result){
            console.log("Data added.");
        }
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        res.json("Internal Server Error.");
    }
})


module.exports = router;


