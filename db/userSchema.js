const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userId:{
            type:Number,
            required:true,
            unique:true,
            index:true
        },
        name:{
            type:String,
            required:true,
            maxlength:200,
            minlength:1,
            trim:true
        },
        gender:{
            type:String,
            required:true,
            trim:true,
            validate:{
                validator:checkGender,
                message:props => `${props.value} is not a valid gender.`
            }
        },
        phoneNumber:{
            type:Number,
            length:10,
            validate:{
                validator:validphonenumber,
                message:"Phone number must be a 10-digit number.",
            }
        },
        email:{
            type:String,
            required:true,
            validate:{
                validator:validEmailid,
                message:"Enter valid email id."
            }
        },
        address:[
            {
                address1:{
                    type:String,
                    required:true
                },
                address2:String,
                country:{
                    type:String,
                    required:true
                },
                state:{
                    type:String,
                    required:true
                },
                city:{
                    type:String,
                    required:true
                },
                pincode:{
                    type:Number,
                    required:true,
                    length:6,
                    validate:{
                        validator:validPinCode,
                        message:"Enter right pincode of your area and only 6 digit."
                    }
                },
            }
        ],
        hobbies:[String],
    },{
        collection:'User-Authentication',
        timestamps:true
    }
)

function checkGender(value){
    return ['male','female','nonBinary'].includes(value);
}

function validphonenumber(value){
    return Number.isInteger(value) && value.toString().length === 10;
}


function validPinCode(value){
    return Number.isInteger(value) && value.toString().length === 6;
}

function validEmailid(value){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}



module.exports = mongoose.model('users',userSchema);