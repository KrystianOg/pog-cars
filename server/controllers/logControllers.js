const Log = require('../models/log');

exports.getAllLogs = async (req,res,next) => {
    try{
        let [logs,_] = await Log.findAll();
        res.status(200).json(logs);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewLog = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {log_time, user_id, message, operation} = req.body;
        let log = new Log(log_time, user_id, message, operation)

        log= await log.save();
        res.status(201).json({message:"Log added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getLogById = async (req,res,next) => {
    try{
        let [log,_] = await Log.findById(req.params.id);
        res.status(200).json(log);
    } catch(err){
        console.log(err)
        next(err);
    }
}