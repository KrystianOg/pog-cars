const Rental_history = require('../models/rental_history');

exports.getAllRentalHistory = async (req,res,next) => {
    try{
        let [rental_history,_] = await Rental_history.findAll();
        res.status(200).json(rental_history);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewRentalHistory = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {car_id, user_id, agency_id, rental_begin, rental_end, price} = req.body;
        let rental_history = new Rental_history(car_id, user_id, agency_id, rental_begin, rental_end, price)

        rental_history= await rental_history.save();
        res.status(201).json({message:"Successfully added Car to rental history "});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getRentalHistoryByUserId = async (req,res,next) => {
    //check requirements
    

    try{
        let [rental_history,_] = await Rental_history.findById(req.params.id);
        res.status(200).json(rental_history);
    } catch(err){
        console.log(err)
        next(err);
    }
}