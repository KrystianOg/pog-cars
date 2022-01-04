const db = require('../config/db')

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
            year,
            deleted,
            model,
            make
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
            ${this.year},
            ${this.deleted},
            ${this.model},
            ${this.make}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM cars;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM cars WHERE car_id=${id}`;

        return db.execute(sql);
    }

    static findByMileage(mileage)
    {
        let sql = `SELECT * FROM cars WHERE mileage=${mileage}`;

        return db.execute(sql);
    }

    static findByHorsepower(horsepower)
    {
        let sql = `SELECT * FROM cars WHERE horsepower=${horsepower}`;

        return db.execute(sql);
    }

    static findByMileage(mileage)
    {
        let sql = `SELECT * FROM cars WHERE mileage=${mileage}`;

        return db.execute(sql);
    }

    // updating

    static deleteCarById(id)
    {
        //removedCar = this.findById(id); chyba bzdury
        //removedCar.deleted = true; tu też

        //sprawdzic czy uzytkownik jest adminem

        let sql = `UPDATE cars SET deleted = 1 WHERE car_id=${id}`;

        return db.execute(sql);
    }

    static updatePrice(id, newPrice)
    {
        let sql = `UPDATE cars SET price=${newPrice} WHERE car_id=${id}`;

        return db.execute(sql);
    }

    //update agency_id after an agency is removed, agency with id = 0 is a dummy agency
    static updateAgencyId(agency_id)
    {
        let sql = `UPDATE cars SET agency_id=${0} WHERE agency_id=${agency_id}`;

        return db.execute(sql);
    }

    
}
module.exports = Car;