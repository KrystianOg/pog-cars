const Car_article = require('../models/car_articles');

exports.getAllCarArticles = async (req,res,next) => {
    try{
        let [car_articles,_] = await Car_article.findAll();
        res.status(200).json(car_articles);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewCarArticle = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {article_id, car_id} = req.body; 
        let car_article = new Car_article(article_id, car_id); 

        car_article= await car_article.save();
        res.status(201).json({message:"Car article added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getCarArticleById = async (req,res,next) => {
    try{
        let [car_article,_] = await Car_article.findById(req.params.id);
        res.status(200).json(car_article);
    } catch(err){
        console.log(err)
        next(err);
    }
}
