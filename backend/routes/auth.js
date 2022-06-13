const express = require('express');
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuser');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "lucifer";

const{body, validationResult} = require('express-validator')

// Route 1: Creating a user using the OST request(/api/auth/createuser)
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
        res.status(500).send("Internal server error");
    }
   
})

// Route 2: Authenticate a user using: POST "api/auth/login". NO Login required
router.post('/login',[
    body('email', "Enter a valid Email id").isEmail(),
    body('password', "password cannot be blank").exists(),
] ,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const{email, password} =req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please try login with correct credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken});

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// Route 3: Get LogedIn user detail using: POST "api/auth/getuser" .Login Requreied
router.post('/getuser',fetchuser, async (req,res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
}) 
module.exports = router