const models =require('../models');
const { get } = require('../routes/posts');


function save (req , res){
   console.log("post ======== >",req);
   // get data from request body
    const post ={
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        catogryId : 1,
        userId : 1
    }
    console.log("post ======== >",post);

    //deling with Database using ORM (sequelize)
    models.Post.create(post).then(result=>{
        res.status(201).json({
            message : "post created successfully",
            post : result
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function show (request , response){
    const id = request.params.id;

    console.log("id $$$$$$$$$$$$",id)
    models.Post.findByPk(id).then(result => {
        console.log(result)
        response.status(200).json(result)   
    }).catch( err=>{
        response.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function index (req , res){

    models.Post.findAll().then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function update (req , res){
    const id = req.params.id

    models.Post.update(req.body,{ where : {id:id } }).then(result=>{
        res.status(200).json({
            message : "post updated successfully",
            post : result
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function destroy (req , res){
    const id = req.params.id
    
    models.Post.destroy({ where : {id:id } }).then(result=>{
        res.status(200).json({
            message : "post deleted successfully",
            post : result
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

module.exports = {
    save:save ,
    show:show , 
    index:index,
    update:update ,
    destroy:destroy
}
