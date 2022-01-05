const Car = require('../models/cars');

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
        //extracting parameters from request body
        let {mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year} = req.body;
        let hp = req.body.horsepower;
        let car = new Car(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year)

        car= await car.save();
        res.status(201).json({message:"Car added successfully"});
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
        // idk
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.removeCarById = async (req,res,next) => {
    try{
        let[car,_] = await Car.removeCar(req.params.id);
        res.status(204).json({message:"Car removed successfully"});
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