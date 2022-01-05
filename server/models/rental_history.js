const db = require('../config/db')

class Rental_history{
    constructor(car_id, user_id, agency_id, rental_begin, rental_end, price){
        this.car_id = car_id;
        this.user_id = user_id;
        this.agency_id = agency_id;
        this.rental_begin = rental_begin;
        this.rental_end = rental_end;
        this.price = price;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            car_id,
            user_id,
            agency_id,
            rental_begin,
            rental_end,
            price
            ) VALUES (
            ${this.car_id},
            ${this.user_id},
            ${this.agency_id},
            ${this.rental_begin},
            ${this.rental_end},
            ${this.price}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM rental_history;"
        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM rental_history WHERE rent_id=${id}`;
        return db.execute(sql);
    }

    static findByUserId(user_id){
        let sql = `SELECT * FROM rental_history WHERE user_id=${user_id}`;
        return db.execute(sql);
    }

    // updating
}

module.exports = Rental_history;