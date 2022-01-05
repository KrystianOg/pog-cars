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
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.tempLogin = async(req,res,next) =>{
    try{
        req.session.user_id = 2;
        req.session.user_type = 'ADMIN'
        res.status(200).json({message:`Currently logged in as user ${req.session.user_id}`})
    } catch(err){
        console.log(err)
        next(err);
    }
}

//controller najwyzej przenieść
exports.register = async (req,res,next) =>{
    try{
        //extracting parameters from request body
        const {email, password, password2} = req.body;
        let errors = []

        if(!email || !password || !password2) {
            errors.push({msg : "Please fill in all fields"})
        }

        //check if match
        if(password !== password2) {
            errors.push({msg : "passwords don't match"});
            //some res status
            throw new Error({msg : "passwords don't match"});
        }

        u = new User(email,password)

        bcrypt.genSalt(10,(err,salt) => {
            //login check
            let hash= sha256( process.env.PEPPER+password+salt);
            let sql = `INSERT INTO users(email,password,salt) VALUES('${u.email}','${hash}','${salt}')`;
            db.execute(sql);
        })

        res.status(200).json({message:"User added successfully"});
    } catch(err){
        console.log(err)
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