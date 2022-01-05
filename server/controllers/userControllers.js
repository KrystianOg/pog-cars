const User = require('../models/users');
const db = require('../config/db')

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
        let [user,_] = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.rateAgent = async (req,res,next) => {
    try{
        let {message, star_rating} = req.body;
        let agent_id = req.params.id
        let user_id = req.session.user_id;

        let [rows,_] = await db.execute(`SELECT COUNT(*) AS count FROM users WHERE user_id=${user_id} OR user_id=${agent_id};`);

        switch(rows[0].count){
            case 2:
                await User.rateAgent(agent_id,user_id,message,star_rating)
                res.status(200).json({message:"User rated successfully"});
                break;
            case 1:
                res.status(403).json({message:"You can't rate yourself"});
            case 0:
                res.status(403).json({message:"You can't rate this user"});
        } 
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.deleteUser = async (req,res,next) => {
    try{
        switch(rew.session.user_type){
            case 'ADMIN':
                let [rows,_] = await db.execute(`SELECT COUNT(*) AS count FROM users WHERE type='ADMIN';`);
                if(rows[0].count > 1) {
                    await User.deleteUser(req.params.id);
                    res.status(200).json({message:"User deleted successfully"});
                } else if( rows[0].count == 1){
                    res.status(403).json({message:"You can't delete the last admin"});
                }
                break;
            case 'AGENT': 
                //add something for agent
                res.status(403).json({message:"You are not allowed to delete admins"});
                break;
            case 'CLIENT':
                res.status(403).json({message:"You are not allowed to delete users"});
                break;
        }
    } catch(err){
        console.log(err)
        next(err);
    }
}