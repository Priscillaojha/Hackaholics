const mongooes = require('mongoose');
const url = 'mongodb://localhost:27017/user-info';//this is my local database(create your own database)

//To connect with database
const connectDb = async () =>{
    try{
        await mongooes.connect(url);
        console.log("Connected to Db succesfully.")
    }catch(error){
        console.error("Database connection fail");
        process.exit(0);
    }
}

module.exports = connectDb;