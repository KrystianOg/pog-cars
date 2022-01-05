const Car_review = require('../models/car_reviews');

exports.getAllCarReviews = async (req,res,next) => {
    try{
        let [car_reviews,_] = await Car_review.findAll();
        res.status(200).json(car_reviews);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewCarReview = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {car_id, user_id, message, star_rating} = req.body; 
        let car_review = new Car_review(car_id, user_id, message, star_rating)

        car_review= await car_review.save();
        res.status(201).json({message:"Car review added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getCarReviewById = async (req,res,next) => {
    try{
        let [car_review,_] = await Car_review.findById(req.params.id);
        res.status(200).json(car_review);
    } catch(err){
        console.log(err)
        next(err);
    }
}
