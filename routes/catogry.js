const express = require('express');
const catogryController = require("../controllers/catogry.contorller");

const router = express.Router();

// create catogry route 
router.post('/',catogryController.save)

// get all catogries route
router.get('/',catogryController.index)
// update catogry by id route
router.put('/:id',catogryController.update)
// delete catogry by id route
router.delete('/:id',catogryController.destroy) 


module.exports =router