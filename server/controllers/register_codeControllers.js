const Register_code = require('../models/register_codes');

exports.getAllRegisterCodes = async (req,res,next) => {
    try{
        let [register_codes,_] = await Register_code.findAll();
        res.status(200).json(register_codes);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewRegisterCode = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {code_hash, user_id, expiration} = req.body;
        let log = new Register_code(code_hash, user_id, expiration)

        log= await log.save();
        res.status(201).json({message:"Register code added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getRegisterCodeById = async (req,res,next) => {
    try{
        let [register_code,_] = await Register_code.findById(req.params.id);
        res.status(200).json(register_code);
    } catch(err){
        console.log(err)
        next(err);
    }
}