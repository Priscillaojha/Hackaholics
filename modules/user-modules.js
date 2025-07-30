const mongooes = require('mongoose');
const jwt = require('jsonwebtoken');

//Declearing the collection and assinging the type.

const userSchema = new mongooes.Schema({
    userName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

});



//JWT token 
userSchema.methods.generateToken = async function () {
    try{
        //jwt.sign() is jsonwebtoken package used to create a token which contains user data(payload), a serect key
        return jwt.sign(
            //this is payload
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRECT_KEY,
            {
                expiresIn: '30d',
            }

        )
    }catch(error){
        console.log(error);
    }
}

const User = new mongooes.model("User", userSchema);

module.exports = User; 