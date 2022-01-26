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
    //let sql = `SELECT user_id, type FROM users WHERE users.email='${email}' AND users.password=SHA2('${process.env.PEPPER+password}'+users.salt,256);`;
    
    //get usersalt
    let sql = `SELECT salt FROM users WHERE users.email='${email}'`;
    let [rows,fields] = await db.execute(sql);

    let salt = rows[0].salt
    let hash= sha256( process.env.PEPPER+password+salt);

    console.log(hash)

    if(rows.length == 0){
        res.status(401).json({message:"Wrong email or password"});
        throw new Error("Wrong email or password");
    }

    sql = `SELECT user_id, type FROM users WHERE users.email='${email}' AND users.password='${hash}' AND users.deleted=0;`;
    [rows,fields] = await db.execute(sql);
    //req.session.user_id = row[0].user_id
    //req.session.user_type = row[0].type

    if(rows.length == 0 || rows.length > 1){
        res.status(401).json({message:"Wrong email or password"});
        throw new Error("User not found");
    }
    console.log(rows)
    res.status(200).json(rows[0])
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.logout = (req,res,next) => {

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

            console.log(hash)
            let sql = `INSERT INTO users(username,email,password,salt) VALUES('${username}','${email}','${hash}','${salt}')`;
            db.execute(sql);
        })
        
        res.sendStatus(201);
    } catch(err){
        console.log(err)
        res.sendStatus(401)
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