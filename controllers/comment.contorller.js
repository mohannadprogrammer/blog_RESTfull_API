const models = require('../models');
const Validator =require('fastest-validator');
const comment = require('../models/comment');



function save (req , res){
    const comment ={
        content : req.body.content,
        postId : req.body.postId,
        userId : req.body.userId
    }
    const schema={
        content:{type:"string",min:3,max:5000,optional:false},
        postId:{type:"number",integer:true,positive:true,optional:false},
        userId:{type:"number",integer:true,positive:true,optional:false}
    }
    const v = new Validator();
    
    if(!v.validate(comment,schema)){
            return res.status(422).json({
                message : "validation failed",
                errors : v.errors
            })
    }
   
        

    models.Comment.create(comment).then(result=>{  
        res.status(201).json({
            message : "comment created successfully",
            comment : result
        })
    }   ).catch(err=>{    
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
    
}

function show (req, res){
    const id = request.params.id;
    models.Comment.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message : "comment not found"
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })

}

function update (req , res){
    const id = req.params.id;
    console.log("id $$$$$$$$$$$$",id)
    const updatedComment ={
        content : req.body.content,
        postId : req.body.postId,
        userId : req.body.userId
    }
    const schema={
        content:{type:"string",min:3,max:5000,optional:false},
        postId:{type:"number",integer:true,positive:true,optional:false},
        userId:{type:"number",integer:true,positive:true,optional:false}
    }
    const v = new Validator();
    
    if(!v.validate(updatedComment,schema)){
            return res.status(422).json({
                message : "validation failed",
                errors : v.errors
            })
    }


    models.Comment.update(updatedComment , {where :{ id:id} }).then(comment=>{
        if(comment == 0){
            return res.status(404).json({
                status:404,
                message : "comment not found"
            })
        }

        res.status(200).json({
            message : "comment updated successfully",
            comment : comment
        }) 
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}   

function index (req , res){

    models.Comment.findAll().then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

function destroy (req , res){
    const id = req.params.id;

    models.Comment.destroy({ where : {id:id} }).then(result=>{
        if (result === 0) {
            
            return res.status(404).json({
                status:404,
                message: "comment not found"
            })
        }
        res.status(200).json({
            message : "comment deleted successfully",
            comment : result
        })
    }).catch(err=>{
        res.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}
module.exports = {
    save:save,
    show:show,
    destroy:destroy,
    update:update,
    index:index
}