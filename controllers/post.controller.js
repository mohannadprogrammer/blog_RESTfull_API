const models =require('../models');


function save (req , res){
   
   // get data from request body
    const post ={
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        catogryId : req.body.catogryId,
        userId : 1
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
        console.log(result)
        response.status(200).json(result)   
    }).catch( err=>{
        response.status(500).json({
            message : "something went wrong",
            error : err
        })
    })
}

module.exports = {
    save:save ,
    show:show
}
