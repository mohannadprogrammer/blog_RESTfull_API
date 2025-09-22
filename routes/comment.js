const express = require('express');
const models = require('../models');

const commentController = require("../controllers/comment.contorller");

const router = express.Router();

// route to create a new comment
router.post('/', commentController.save);
// route to get all comments
router.get('/', commentController.index);
// route to get a comment by id
router.get('/:id', commentController.show);
// route to update a comment by id
router.put('/:id', commentController.update);
// route to delete a comment by id
router.delete('/:id', commentController.destroy);

module.exports = router;