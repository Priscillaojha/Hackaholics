const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller')
const signupSchema = require('../validators/signUp-validators');
const loginSchema = require('../validators/logIn-validators');
const validate = require('../middlewares/validate-middleware');

//using express router because this make code more organize(which helps in routing)

router.route('/').get(authController.home);
//route for register page
router.route('/register').post(validate(signupSchema),authController.register);
//route for login page
router.route('/login').post(validate(loginSchema), authController.login);

module.exports = router;