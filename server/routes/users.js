// const router =require('express').Router()

import express from 'express'
const router=express.Router()
import userDb from '../models/userDb.js';


// router.route('/').get((req,res)=>{
//     User.find()
//     .then(users=>res.json(users))
//     .catch(err=>res.status(400).json('Error :'+err));
// })

router.route('/register').post((req,res)=>{
    const name=req.body.name;
    const mobile=req.body.mobile;
    const password=req.body.password;
    const email=req.body.email;
    const newUser=new userDb({name,mobile,email,password});

    newUser.save()
    .then(()=>{
        res.json("User added!");
    })
    .catch(()=>{
        err=>res.status(400).json("Error occurred"+err);
    })
})

export default router;