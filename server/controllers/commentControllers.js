const Comment = require('../models/comments');

exports.getAllComments = async (req,res,next) => {
    try{
        let [comments,_] = await Comment.findAll();
        res.status(200).json(comments);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewComment = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {user_id, article_id, deleted, content} = req.body;
        let comment = new Comment(user_id, article_id, deleted, content)

        comment= await comment.save();
        res.status(201).json({message:"Comment added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getCommentById = async (req,res,next) => {
    try{
        let [comment,_] = await Comment.findById(req.params.id);
        res.status(200).json(comment);
    } catch(err){
        console.log(err)
        next(err);
    }
}