//In express.js application, controller is code that is responsible for handling he application logic.
const User = require('../modules/user-modules');
const bcrypt = require('bcrypt');

//where req=request(getting data from server), res=response(sending data from server)
const home = async (req, res)=>{
    try{
        res.status(200).send("Just checking controller for router.");
    }
    catch (error){
        console.log(error);
    }  
}

//CREATING NEW ACCOUNT LOGIC 

const register = async (req, res) => {
    //users enter the his/her information which go to server
    try{
        const {userName, email, phone, password} = req.body;//store in this variable which are send from users

        const userExist = await User.findOne({email});//search for the email

        if(userExist){//if email exist then data will not store
            return res.status(400).json({msg: "User already exists."});
        }

        //hashing the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);//this will add salt and store that password in db.
        
        //this will insert new user information in database
        const newUser=await User.create(
            {userName,
             email,
             phone,
            password:hash_password}
        );
        

        res.status(201).json({
            msg: "Registration succesfull", 
            token: await newUser.generateToken(),
            userId: newUser._id.toString(),//this change user id into string because id is a object
        });

        console.log(newUser);
        
    }catch(error){
        next(error);
    }
}

//LOGIN LOGIC

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist){//if user does not exist user can't login
            return res.status(400).json({message:"Invalid credentials"})
        }
        //compare password 
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        

        //if password is is correct then this run
        if(isPasswordValid){
            res.status(200).json({
                message: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message: "Invalid Email or password"})
        }
    }catch(error){
        next(error);
    }
}

module.exports = {home, register, login};