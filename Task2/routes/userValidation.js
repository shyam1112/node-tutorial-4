const express = require('express');
const app = express();
app.use(express.json());

const User = require('../../db/userSchema');

const router = express.Router();

router.post('/',async(req,res)=>{
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

router.get('/fetchdata',async (req,res)=>{
    let userdata = await User.find();
    if(userdata.length>0){
        res.send(userdata)
    }else{
        res.send({result :  "No data found."});
    }
})

//id : 65cf1fd201a563dbbd68432b

router.get('/fetchdata/:id',async (req,res)=>{
    let userdata = await User.find({_id:req.params.id});
    if(userdata.length>0){
        res.send(userdata)
    }else{
        res.send({result :  "No data found."});
    }
})

router.put('/updatedata/:id',async (req,res)=>{
    let updatedData = await User.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(updatedData);
})

router.delete('/delete/:id',async(req,res)=>{
    let result = await User.deleteOne(
        {_id:req.params.id}
    )

    res.send(result);
})
module.exports = router;


