
//this will check is user send info in validate as per schema in file of validators

const validate = (schema) => async (req, res, next) => {
    try{

        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch(err){
        const status = 422;
        const message = err.issues.map((curElem) => curElem.message);//make array of an every error

        const error ={
            status,
            message
        }
       next(error);//to call error-middleware.

    }
}

module.exports = validate;