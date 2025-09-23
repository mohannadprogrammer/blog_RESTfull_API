const express = require('express')

const postsController = require("../controllers/post.controller");


const router = express.Router();

// create post route 
router.post('/',postsController.save)

// get all posts route
router.get('/',postsController.index)

// get post by id route
router.get('/:id',postsController.show)

router.put('/:id',postsController.update)

router.delete('/:id',postsController.destroy)    

module.exports =router