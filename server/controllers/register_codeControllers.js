const Register_code = require('../models/register_codes');

exports.addNewRegisterCode = async (req,res,next) => {
    try{
        if(req.session.user_type == 'ADMIN' || req.session.user_type == 'AGENT'){
        //extracting parameters from request body
        let {code_hash, user_id, expiration} = req.body;
        let log = new Register_code(code_hash, user_id, expiration)

        log= await log.save();
        res.status(201).json({message:"Register code added successfully"});
        }
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.useRegisterCode = async (req, res, next) => {
    try{
        
        res.status(201).json({message:"Register code used successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}