const Discount = require('../models/discounts');

exports.getAllDiscounts = async (req,res,next) => {
    try{
        let [discounts,_] = await Discount.findAll();
        res.status(200).json(discounts);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewDiscount = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {code, expiration_date, user_id, value, car_id} = req.body;
        let discount = new Discount(code, expiration_date, user_id, value, car_id)

        discount= await discount.save();
        res.status(201).json({message:"Discount added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getDiscountById = async (req,res,next) => {
    try{
        let [discount,_] = await Discount.findById(req.params.id);
        res.status(200).json(discount);
    } catch(err){
        console.log(err)
        next(err);
    }
}