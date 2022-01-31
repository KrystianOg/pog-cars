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
            '${this.model}',
            '${this.make}'
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM cars;"

        return db.execute(sql);
    }

    static findNotDeleted(){
        let sql = "SELECT * FROM cars WHERE deleted='0';"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM cars WHERE car_id=${id}`;

        return db.execute(sql);
    }
//cena ocena 
    static filter(req)
    {
        'use strict'
        let {mileage_min, mileage_max, horsepower_min, horsepower_max,price_min,price_max,year_min,year_max,seats,transmission,drivetrain,fuel,agency_id,make,model} = req.body
        
        let sql = `SELECT * FROM cars WHERE `;

        var dictionary = {}
        dictionary[ `mileage >= ${mileage_min}`] = mileage_min == null;
        dictionary[ `mileage <= ${mileage_max}`] = mileage_max == null;
        dictionary[ `horsepower >= ${horsepower_min}`] = horsepower_min == null;
        dictionary[ `horsepower >= ${horsepower_max}`] = horsepower_max == null;
        dictionary[ `price >= ${price_min}`] = price_min == null;
        dictionary[ `price <= ${price_max}`] = price_max == null;
        dictionary[ `year >= ${year_min}`] = year_min == null;
        dictionary[ `year <= ${year_max}`] = year_min == null;
        dictionary[ `seats = ${seats}`] = seats == null;
        dictionary[ `transmission = '${transmission}'`] = transmission == null;
        dictionary[ `fuel = '${fuel}'`] = fuel == null;
        dictionary[ `agency_id = ${agency_id}`] = agency_id == null;
        dictionary[ `make = '${make}'`] = make == null;
        dictionary[ `model = '${model}'`] = model == null;
        dictionary[ `drivetrain = '${drivetrain}'`] = drivetrain == null;
        for(const[key,value] of Object.entries(dictionary)){
            sql += value == false ? key+" AND " : ""
        }

        sql = sql.slice(0,sql.lastIndexOf("AND"))
        sql += ";";
        return db.execute(sql);
    }

    static sort(type)
    {
        let sql

        //change that to asc / desc on everything
        switch(type){
            case "mileage_asc":
                sql = "SELECT * FROM cars ORDER BY mileage ASC"
                break
            case "mileage_desc":
                sql = "SELECT * FROM cars ORDER BY mileage DESC"
                break
            case "horsepower_asc":
                sql = "SELECT * FROM cars ORDER BY horsepower ASC"
                break
            case "horsepower_desc":
                sql = "SELECT * FROM cars ORDER BY horsepower DESC"
                break
            case "fuel_consumption_asc":
                sql = "SELECT * FROM cars ORDER BY fuel_consumption ASC"
                break
            case "fuel_consumption_desc":
                sql = "SELECT * FROM cars ORDER BY fuel_consumption DESC"
                break
            case "price_asc":
                sql = "SELECT * FROM cars ORDER BY price ASC"
                break
            case "price_desc":
                sql = "SELECT * FROM cars ORDER BY price DESC"
                break
            case "year_asc":
                sql = "SELECT * FROM cars ORDER BY year ASC"
                break
            case "year_desc":
                sql = "SELECT * FROM cars ORDER BY year DESC"
                break
        }
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
        let sql = `UPDATE cars SET agency_id = 0 WHERE agency_id = ${agency_id}`;

        return db.execute(sql);
    }

    static reserveCar(car_id, user_id, agency_id, rental_begin, rental_end,car_agency_id, price){
        //check rental history

        let rb = new Date(rental_begin)
        let re = new Date(rental_end)

        //throw error if begin is after end
        if(rb > re)
        {
            throw new Error("Rental begin date is after rental end date");
        }
        //throw error if already reserved in that period
        
        //policzyc dodatkowo jesli agencja nie jest agencja w ktorej znajduje sie samochod - wedlug odleglosci czy cos

        // To calculate the no. of days between two dates
        var daysBetween = Math.round(re - rb) / (1000 * 3600 * 24);

        //obliczenie ceny za okres
        let p = price * daysBetween / 30
        //opłata za przetransportowanie samochodu
        price += car_agency_id === agency_id ? 0 : 200 

        let sql = `INSERT INTO rental_history(user_id, car_id, agency_id, rental_begin, rental_end, price) VALUES (
            ${user_id},
            ${car_id},
            ${agency_id},
            '${rb.getFullYear()}-${rb.getMonth()+1}-${rb.getDate()}',
            '${re.getFullYear()}-${re.getMonth()+1}-${re.getDate()}', 
            ${price}
            )`
        
        return db.execute(sql);
    }
}


module.exports = Car;