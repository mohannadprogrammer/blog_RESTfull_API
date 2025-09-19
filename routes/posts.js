const express = require('express')

const postsController = require("../controllers/post.controller");

const router = express.Router();

// create post route 
router.post('/',postsController.save)

// get post by id route
router.get('/:id',postsController.show)

module.exports =router