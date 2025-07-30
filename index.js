require("dotenv").config();
const express = require('express');
const app = express();
const router= require('./router/auth-router');
const dbconnection = require('./utiles/db');
const errorMiddleware = require("./middlewares/error-middleware");


app.use(express.json());//Its primary purpose is to parse incoming requests with JSON payloads. 


app.use("/api/auth", router);

app.use(errorMiddleware);

const PORT = 4000;

dbconnection().then(() => {
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    })
})


