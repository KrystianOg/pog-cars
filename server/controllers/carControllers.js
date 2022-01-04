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
        let {mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year,deleted,model,make} = req.body;
        let car = new Car(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year,deleted,model,make)

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

exports.deleteCarById = async (req,res,next) => {
    try{
        // idk
    } catch(err){
        console.log(err)
        next(err);
    }
}
