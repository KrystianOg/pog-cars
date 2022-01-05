const Discount = require('../models/discounts');

exports.addNewDiscount = async (req,res,next) => {
    try{
        if(req.session.user_type =='ADMIN' || req.session.user_type == 'AGENT'){
            //extracting parameters from request body
            let {code, expiration, value, car_id=null, user_id=null} = req.body;
            let discount = new Discount(code, expiration, user_id, value, car_id)
            discount= await discount.save();
            res.status(201).json({message:"Discount added successfully"});
        } else {
            res.status(401).json({message:"Unauthorized"});
        }
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.useDiscount = async (req,res,next) => {
    try{
        let [discount,_] = await Discount.findByCode(req.params.code);

        let {code, expiration, value, car_id=null, user_id=null} = discount[0]
        let car = req.params.car_id
        let date = new Date(expiration)

        if(date < new Date()){
            res.status(400).json({message:"Discount expired"});
        }

        if(user_id == null && car_id == null){
            res.status(200).json({message:"Discount applied successfully"});
        }else if(user_id == null && car_id == car){
            res.status(200).json({message:"Discount applied successfully"});
        } else if(user_id == req.session.user_id && car_id == null){
            res.status(200).json({message:"Discount applied successfully"});
        } else if(user_id ==req.session.user_id && car_id == null){
            res.status(200).json({message:"Discount applied successfully"});
        } else {
            res.status(400).json({message:"Discount not applicable"});
        }
    } catch(err){
        console.log(err)
        next(err);
    }
}