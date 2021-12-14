const db = require('../config/db')

class Car{
    constructor(mileage, horsepower, seats, transmission, drivetrain, fuel, fuel_consumption, price, agency_id, year){
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
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO cars(
            mileage,
            horsepower,
            seats,
            transmission,
            drivetrain,
            fuel,
            fuel_consumption,
            price,
            agency_id,
            year
            ) VALUES (
            ${this.mileage},
            ${this.horsepower},
            ${this.seats},
            '${this.transmission}',
            '${this.drivetrain}',
            '${this.fuel}',
            ${this.fuel_consumption},
            ${this.price},
            ${this.agency_id},
            ${this.year}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM cars;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM cars WHERE car_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Car;