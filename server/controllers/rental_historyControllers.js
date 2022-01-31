const Rental_history = require('../models/rental_history');
const Auth = require('./auth');

exports.getAllRentalHistory = async (req,res,next) => {
    
    try{
        if(await Auth.checkAuth(req.body.user_id,'AGENT')){
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

        if(await Auth.checkAuth(req.body.user_id,'AGENT')){
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
    try{
        if(await Auth.checkAuth(req.body.user_id,'AGENT')||req.body.user_id === req.params.id){
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