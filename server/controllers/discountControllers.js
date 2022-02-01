const Discount = require('../models/discounts');
const db = require('../config/db')
const checkAuth = require('./auth').checkAuth;

exports.addNewDiscount = async (req,res,next) => {
    try{
        let {user_id} = req.body

        if(checkAuth(user_id,'AGENT')){
            //extracting parameters from request body
            let {code, expiration, amount} = req.body;
            let car_id = parseInt(req.params.id);
            let discount = new Discount(code, expiration, null, amount, car_id)
            discount= await discount.save();
            res.status(201).json({message:"Discount added successfully"});
        } else {
            res.status(401).json({message:"Unauthorized"});
        }
    } catch(err){
        res.status(400).json({message:"Discount not added"});
        console.log(err)
        next(err); 
    }
}

exports.useDiscount = async (req,res,next) => {
    try{
        let [discount,_] = await Discount.findByCode(req.params.code);

        let {expiration, value, car_id=null, user_id=null} = discount[0]
        let {car, user} = req.body
        let date = new Date(expiration)

        if(date < new Date().getTime()){
            res.status(400).json({message:"Discount expired"});
        }

        if(user_id === null && car_id === null){
            res.status(200).json({message:"Discount applied successfully", 'value': value});
        }else if(user_id === null && car_id === car){
            res.status(200).json({message:"Discount applied successfully", 'value': value});
        } else if(user_id === user && car_id === null){
            res.status(200).json({message:"Discount applied successfully", 'value': value});
        } else {
            res.status(400).json({message:"Discount not applicable"});
        }
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.getAllDiscounted = async (req, res, next) => {
    try{
        let sql = `SELECT expiration_date,user_id,value,car_id FROM discounts WHERE car_id IS NULL AND user_id IS NOT NULL`;
        let [rows,_] = await db.execute(sql);

        res.status(200).json(rows)
    } catch(err){
        res.status(400).json({message:"Discounts not found"});
        console.log(err)
        next(err)
    }
}