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
        let {creator_id, title, content} = req.body; //zastanawiam sie, czy tu powinno byc creator_id, jezeli technicznie dana osoba wstawia artykul? nie mozna tego jakos automatycznie od niej przypisac?
        let article = new Article(creator_id, title, content) //tu i na gorze niezainicjalizowane deleted - z tego co rozumiem to nie trzeba, bo nie wstawiamy usunietych artykulow (a default value jest rowne '0')?

        article= await article.save();
        res.status(201).json({message:"Article added successfully"});
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