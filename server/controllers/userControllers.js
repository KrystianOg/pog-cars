const user = require('../models/users');

exports.getAllUsers = async (req,res,next) => {
    try{
        let [users,_] = await user.findAll();
        res.status(200).json(users);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewUser = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {firstname, lastname, birth_date, username, email, type, deleted, salt, password} = req.body;
        let user = new User(firstname, lastname, birth_date, username, email, type, deleted, salt, password)

        user= await user.save();
        res.status(201).json({message:"User added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getUserById = async (req,res,next) => {
    try{
        let [user,_] = await user.findById(req.params.id);
        res.status(200).json(user);
    } catch(err){
        console.log(err)
        next(err);
    }
}