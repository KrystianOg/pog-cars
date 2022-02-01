const Rental_history = require('../models/rental_history');
const Auth = require('./auth');
const db = require('../config/db');

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

exports.getRentalHistoryByCarId = async(req,res,next) => {
    try{
        let sql = `SELECT rental_begin, rental_end FROM rental_history WHERE car_id =${req.params.car} AND rental_end > NOW();`;
        let [history,_] = await db.execute(sql);

        res.status(200).json(history);
    } catch(e){
        console.log(e)
        next(e)
    }
}