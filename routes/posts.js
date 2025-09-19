const express = require('express')

const postsController = require("../controllers/post.controller");

const router = express.Router();

// create post route 
router.get('/',postsController.save)


module.exports =router