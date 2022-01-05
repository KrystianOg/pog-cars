const Car = require('../models/cars');
const db = require('../config/db')

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

        if(req.session.user_type =='ADMIN' || req.session.user_type == 'AGENT'){
            //extracting parameters from request body
            let {mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year,deleted,model,make} = req.body;
            let car = new Car(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year,deleted,model,make)

            car= await car.save();
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
        let [car,_] = await Car.findById(req.params.id);
        res.status(200).json(car);
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.reserveCar = async (req,res,next) => {
    try{
        let {rental_begin,rental_end, agency_id} = req.body;
        let user_id = req.session.user_id
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
        if(req.session.user_type == 'ADMIN' || req.session.user_type == 'AGENT'){
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
