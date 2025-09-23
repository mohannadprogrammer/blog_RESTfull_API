const models =require('../models');
const Validator =require('fastest-validator');


function save (req , res){
   
   // get data from request body
    const post ={
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        catogryId : req.body.catogryId,
        userId : req.userId
    }
    const schema={
        title:{type:"string",min:3,max:255 ,optional:false},
        content:{type:"string",min:3,max:5000,optional:false},
        imageUrl:{type:"string",optional:true,empty:true},
    }
    
    const v = new Validator();
    const validationResponse = v.validate(post,schema);

    if (validationResponse !== true){
        return res.status(400).json({
            message : "validation failed",
            errors : validationResponse
        })
    }   


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
        if (result){
            response.status(200).json(result)
            
        }else{
            response.status(404).json({
                message : "post not found"
            })
        }
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

    const post ={
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
    }

    const schema={
        title:{type:"string",min:3,max:255 ,optional:false},
        content:{type:"string",min:3,max:5000,optional:false},
        imageUrl:{type:"string",optional:true,empty:true},
    }
    
    const v = new Validator();
    const validationResponse = v.validate(post,schema);

    if (validationResponse !== true){
        return res.status(400).json({
            message : "validation failed",
            errors : validationResponse
        })
    }

    models.Post.update(post,{ where : {id:id } }).then(result=>{
        if(result == 0){
            return res.status(404).json({
                status: 404,
                message : "post not found"
            })
        }
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
        
        if(result == 0){
            return res.status(404).json({
                status: 404,
                message : "post not found"
            })
        }

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
