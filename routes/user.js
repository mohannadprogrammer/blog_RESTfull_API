const express = require('express');
const userController = require("../controllers/user.controller");

const router = express.Router();

// sign up route
router.post('/signup',userController.signUp)

// login route
router.get('/login',userController.login)

module.exports =router

