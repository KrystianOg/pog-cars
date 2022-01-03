exports.showFAQ = async (req,res,next) => {
    try{
        res.json({message: "Jeszcze niezaimplementowane."});
    }  catch(err){
        console.log(err)
        next(err);
    }
}

