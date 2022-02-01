const Article = require('../models/articles');
const db = require('../config/db')

exports.getAllArticles = async (req,res,next) => {
    try{
        let [articles,_] = await Article.findAll();
        res.status(200).json(articles);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.getArticlesWithAnchor = async (req,res,next) => {
    try{
        let anchor = req.params.anchor
        let amount = req.params.amount
        let sql = `select deleted, title, content, creator_firstname, creator_lastname FROM articles LEFT JOIN (SELECT user_id, firstname as creator_firstname, lastname as creator_lastname FROM users GROUP BY user_id) as a ON articles.creator_id = a.user_id WHERE article_id > ${anchor} AND article_id <= ${anchor+amount};`
        let [articles,_]= await db.execute(sql)
        res.status(200).json(articles);
    } catch(err){
        res.status(400).json({message:"Bad request"});
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
