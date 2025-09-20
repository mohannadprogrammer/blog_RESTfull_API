const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp (req , res){
    const user ={
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }

    models.User.create(user).then(result=>{
        res.status(201).json({
            message : "user created successfully",
            user : result
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function login (req , res){
    const email = req.body.email;
    const password = req.body.password;

    models.User.findOne({ where : {email:email} }).then(user=>{
        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }

        const isPasswordValid = bcrypt.compareSync(password , user.password);
        if(!isPasswordValid){
            return res.status(401).json({
                message : "invalid password"
            })
        }

        const token = jwt.sign({id:user.id} , 'secretkey' , {expiresIn : 86400} ); // 24 hours

        res.status(200).json({
            message : "login successful",
            token : token
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}   
module.exports = {
    signUp:signUp,
    login:login

}