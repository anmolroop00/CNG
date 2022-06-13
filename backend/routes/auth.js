const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "lucifer";

const{body, validationResult} = require('express-validator')

router.post('/createuser',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min: 5}),
] ,async (req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
   }

   try{
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry this email is already registerd with us"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
    })

    const data = {
        user:{
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({authToken});

    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occoured");
    }
   
})

//Authenticate a user using: POST "api/auth/login". Login required
router.post('/createuser',[
    body('email', "Enter a valid Email id").isEmail(),
    body('password', "password cannot be blank").exists(),
] ,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const{email, password} =req.body;
    try{
        let user = User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try login with correct credentials"});
        }
        const passwordCompare = bcrypt.compare(password, user.password);
    }catch(err){

    }
})

module.exports = router