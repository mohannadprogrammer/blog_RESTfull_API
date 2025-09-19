const express = require('express')

const postsController = require("../controllers/post.controller");

const router = express.Router();


router.get('/',postsController.index)


module.exports =router