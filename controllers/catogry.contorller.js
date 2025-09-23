const models = require('../models');

// create and save a new catogry
const save = async (req, res) => {
    const catogrie = {
        name: req.body.name
    }
    models.catogry.create(catogrie).then(result => {
        res.status(200).json({
            message: "catogry created successfully",
            catogry: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "something went wrong",
            error: err
        })
    })
};
// get all catogries
const index = async (req, res) => {
    models.catogry.findAll().then(result => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(500).json({
            message: "something went wrong",
            error: err
        })
    })
};
// updata catogry by id
const update =async (req, res) => {
    const id = req.params.id;
    const catogrie = {
        name: req.body.name
    }
    models.catogry.update(catogrie, { where: { id: id } }).then(result => {
        if (result == 0) {  
            return res.status(404).json({
                status: 404,
                message: "catogry not found"
            })
        }   
        res.status(200).json({
            message: "catogry updated successfully",
            catogry: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "something went wrong",
            error: err
        })
    })
}
//destroy catogry by id 
const destroy = async (req, res) => {
    const id = req.params.id;
    models.catogry.destroy({ where: { id: id } }).then(result => {
        if (result === 0) {
            return res.status(404).json({
                status: 404,
                message: "catogry not found"
            })
        }
        res.status(200).json({
            message: "catogry deleted successfully",
            catogry: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "something went wrong",
            error: err
        })
    })
}

module.exports={
    save:save,
    index:index,
    update:update,
    destroy:destroy
}