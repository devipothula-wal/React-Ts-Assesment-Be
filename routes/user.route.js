const express = require('express')
const router = express.Router();
const { createUser, login } = require('../controllers/userController');

router.post("/", async(req, res,next) => {
    try {
        console.log('payload on createUser', req.body);
        const { userName: email, firstName, lastName, password, phoneNumber } = req.body;
        const result = await createUser({firstName,lastName,email,password,phoneNumber})
        res.status(200).send({success:true, data: result})
    }
    catch (err) {

        next({
            status: 500,
            message:err.message || 'Something went wrong try again!'
        })
    }
})

router.post("/login", async(req, res,next) => {
    try {
        const { userName: email, password } = req.body; 
        const result = await login({ email, password });
        res.status(200).send({success:true, data: result})
    }
    catch (err) {

        next({
            status: 400,
            message: 'Invalid Username or Password',
          });
    }
})

module.exports = router;