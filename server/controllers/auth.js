const User = require('../models/users')
const bcrypt = require ('bcrypt');
const db = require('../config/db')
const sha256 = require('js-sha256');

exports.checkAuth = async (req,res,next) =>{
    
}

//security
exports.login = async (req,res,next) =>{
    try{
    let {email, password} = req.body;
    let sql = `SELECT user_id, type FROM users WHERE users.email='${email}' AND users.password=SHA256('${password+process.env.PEPPER}`;
    let row = db.execute(sql);
    req.session.user_id = row[0].user_id
    re1.session.user_type = row[0].type

    console.log(`login successful for ${req.session.user_id}`)
    res.status(200).json({user_id: req.session.user_id, user_type: req.session.user_type})
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.tempLogin = async(req,res,next) =>{
    try{
        req.session.user_id = req.params.id;
        req.session.user_type = req.params.type
        res.status(200).json({message:`Currently logged in as user ${req.session.user_id} type ${req.session.user_type}`})
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.tempLogout = async(req,res,next) =>{
    try{
        req.session.user_id = null;
        req.session.user_type = null;
        res.status(200).json({message:`Currently logged out. user ${req.session.user_id}`})
    } catch(err){
        console.log(err)
        next(err);
    }
}

//controller najwyzej przenieść
exports.register = (req,res,next) =>{
    try{
        //extracting parameters from request body
        const {username, email, password} = req.body;
        let errors = []

        if(!email || !password ) {
            errors.push({msg : "Please fill in all fields"})
        }

        bcrypt.genSalt(10,(err,salt) => {
            //login check
            let hash= sha256( process.env.PEPPER+password+salt);
            let sql = `INSERT INTO users(username,email,password,salt) VALUES('${username}','${email}','${hash}','${salt}')`;
            db.execute(sql);
        })
        
        res.sendStatus(200);
    } catch(err){
        console.log(err)
        res.sendStatus(400)
        next(err); 
    }
}

exports.generateRegisterCode = async (req,res,next) => {
    //check credentials = change code_hash type in register_codes table

    try{
        let {email} = req.body
        let sql = `INSERT INTO register_codes (email,code, expiration) VALUES ('${email}','${createID(8)}', NOW() + INTERVAL 5 DAY);`;
        db.execute(sql);
        res.status(200).json({message:"Code generated successfully"});
    } catch(err){
        console.log(err)
        next(err);
    }
}

function createID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
}