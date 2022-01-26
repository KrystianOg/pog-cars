class Car{
    constructor(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year, deleted, model, make){
        this.mileage=mileage;
        this.horsepower = horsepower;
        this.seats = seats;
        this.transmission = transmission;
        this.drivetrain = drivetrain;
        this.fuel = fuel;
        this.fuel_consumption = fuel_consumption;
        this.price = price;
        this.agency_id = agency_id;
        this.year = year;
        this.deleted = deleted;
        this.model = model;
        this.make = make;
    }
}

module.exports = Car;