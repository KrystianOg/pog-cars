const Agency = require('../models/agencies');

exports.getAllAgencies = async (req,res,next) => {
    try{
        let [agencies,_] = await Agency.findAll();
        res.status(200).json(agencies);
    }  catch(err){
        console.log(err)
        next(err);
    }
}

exports.addNewAgency = async (req,res,next) => {
    try{
        //extracting parameters from request body
        let {country, voivodeship, city, postcode, street, address, deleted} = req.body;
        let agency = new Agency(country, voivodeship, city, postcode, street, address, deleted)

        agency= await agency.save();
        res.status(201).json({message:"Agency added successfully"});
    } catch(err){
        console.log(err)
        next(err); 
    }
}

exports.getAgencyById = async (req,res,next) => {
    try{
        let [agency,_] = await Agency.findById(req.params.id);
        res.status(200).json(agency);
    } catch(err){
        console.log(err)
        next(err);
    }
}

exports.moveAgency = async (req,res,next) => {
    try{
        let [agency,_] = await Agency.findById(req.params.id);
        res.status(200).json(agency);
    } catch(err){
        console.log(err)
        next(err);
    }
}
