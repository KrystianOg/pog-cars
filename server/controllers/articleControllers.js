const Article = require('../models/articles');

exports.getAllArticles = async (req,res,next) => {
    try{
        let [articles,_] = await Article.findAll();
        res.status(200).json(articles);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewArticle = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {title, content} = req.body; 
        let creator_id = req.session.user_id;
        let article = new Article(creator_id, 0, title, content); 

        article= await article.save();
        res.status(201).json({message:"Article added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.deleteArticle = async (req,res,next) => {
    try{
        
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.getArticleById = async (req,res,next) => {
    try{
        let [article,_] = await Article.findById(req.params.id);
        res.status(200).json(article);
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.removeArticleById = async(req,res,next) => {
    try{
        await Article.removeArticle(req.params.id);
        res.status(204).json({message:"Article removed successfully"});
    } catch(err){
    console.log(err)
    next(err);
    }
}
