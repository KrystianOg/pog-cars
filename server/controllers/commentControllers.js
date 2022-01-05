const Comment = require('../models/comments');


exports.getCommentsByArticleId = async (req,res,next) => {
    try{
        let [comments,_] = await Comment.findByArticleId(req.params.id);
        res.status(200).json(comments);
    }  catch(err){
        console.log(err)
        next(err);
    }
}


exports.addNewComment = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {article_id, content} = req.body;
        let creator_id = req.session.user_id;
        let comment = new Comment(creator_id, article_id, content)

        await comment.save();
        res.status(201).json({message:"Comment added successfully",comment: comment});
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

exports.removeCommentById = async(req,res,next) => {
    try{
        if(req.session.user_type == 'ADMIN' || req.session.user_type == 'AGENT'){
            let [comment,_] = await Comment.removeComment(req.params.id);
            res.status(204).json({message:"Comment removed successfully"});
        } else {
            res.status(401).json({message:"Unauthorized"});
        }
    } catch(err){
    console.log(err)
    next(err);
    }
}