//this is made to send error message 
const errorMiddleware = (err, req, res, next) =>{

    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails ||"Error from Backend";

    return res.status(status).json({status, message, extraDetails});//this return 

}

module.exports = errorMiddleware;