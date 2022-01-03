const db = require('../config/db')

class Discount{
    constructor(code, expiration_date, user_id, value, car_id){
        this.code = code;
        this.expiration_date = expiration_date;
        this.user_id = user_id;
        this.value = value;
        this.car_id = car_id;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            code,
            expiration_date,
            user_id,
            value,
            car_id
            ) VALUES (
            ${this.code},
            ${this.expiration_date},
            ${this.user_id},
            ${this.value},
            ${this.car_id}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM discounts;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM discounts WHERE discount_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Discount;