
function index(req , res){
    const posts ="post list ";
    res.send(posts);
}

module.exports = {
    index :index
}
