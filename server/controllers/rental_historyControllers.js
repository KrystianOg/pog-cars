const Rental_history = require('../models/rental_history');

exports.getAllRentalHistory = async (req,res,next) => {
    

    try{
        if(req.session.user_type =='ADMIN'||req.session.user_type == 'AGENT'){
            let [rental_history,_] = await Rental_history.findAll();
            res.status(200).json(rental_history);
        } else {
            res.status(403).json({message:"You are not allowed to access this page"})
        }
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.getRentalHistoryById = async (req,res,next) => {
    try{
        if(req.session.user_type =='ADMIN'||req.session.user_type == 'AGENT'){
            let [rental_history,_] = await Rental_history.findById(req.params.id)
            res.status(200).json(rental_history);
        } else {
            res.status(403).json({message:"You are not allowed to access this page"})
        }
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.getRentalHistoryByUserId = async (req,res,next) => {
    //check requirements
    let user_id = req.params.id

    try{
        if(req.session.user_type =='ADMIN'||req.session.user_type == 'AGENT'||user_id == req.session.user_id){
            let [rental_history,_] = await Rental_history.findByUserId(req.params.id)
            res.status(200).json(rental_history);
        } else {
            res.status(403).json({message:"You are not allowed to access this page"})
        }
    } catch(err){
        console.log(err)
        next(err);
    }
}