const Car = require('../models/cars');
const db = require('../config/db')

const checkAuth = require('./auth').checkAuth;

exports.getAllCars = async (req,res,next) => {
    try{
        let [cars,_] = await Car.findAll();
        res.status(200).json(cars);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewCar = async (req,res,next) => {
    try{
        console.log(req.body)

        if(checkAuth(req.body.user_id,'AGENT')){
            //extracting parameters from request body
            let {mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year, deleted, model, make} = req.body.car;
            let car = new Car(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year,deleted,model,make)

            await car.save();
            res.status(201).json({message:"Car added successfully"});
        } else {
            res.status(401).json({message:"Unauthorized"});
        }
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getCarById = async (req,res,next) => {
    try{
        let sql = `SELECT * FROM cars WHERE car_id =${req.params.id}`
        let [car,_] = await db.execute(sql)
        res.status(200).json(car);
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.reserveCar = async (req,res,next) => {
    try{
        let {rental_begin,rental_end, user_id, agency_id} = req.body;

        let car_id = req.params.id

        let _sql = `SELECT price, agency_id FROM cars WHERE car_id = ${car_id};`
        let [rows,_]= await db.execute(_sql)

        await Car.reserveCar(car_id,user_id,agency_id,rental_begin,rental_end, rows[0].agency_id,rows[0].price)
        res.status(201).json({message:"Car reserved successfully"});
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.removeCarById = async (req,res,next) => {
    try{
        if(checkAuth('AGENT','AGENT')){
            await Car.deleteCarById(req.params.id);
            res.status(204).json({message:"Car removed successfully"});
        } else {
            res.status(401).json({message:"Unauthorized"});
        }
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

exports.filter = async (req,res,next) => {
    try{
        let[cars,_] = await Car.filter(req);
        res.status(200).json(cars);
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

exports.sort = async (req,res,next) => {
    try{
        let type = req.params.type;
        let[cars,_] = await Car.sort(type);
        res.status(200).json(cars);
    }
    catch(err){
        console.log(err)
        next(err);
    }
}
