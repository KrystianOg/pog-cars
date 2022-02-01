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
        let sql = `INSERT INTO discounts(
            code,
            expiration_date,
            user_id,
            value,
            car_id
            ) VALUES (
            '${this.code}',
            '${this.expiration_date}',
            ${this.user_id},
            ${this.value},
            ${this.car_id}
            );`
        return db.execute(sql);
    }

    // filters
    static findAll(){
        let sql = "SELECT * FROM discounts;"

        return db.execute(sql);
    }

    static findByCode(code){
        let sql = `SELECT expiration_date ,user_id, value, car_id FROM discounts WHERE code='${code}'`;
        return db.execute(sql);
    }

    // updating - shouldn't really be updated once it's added
}

module.exports = Discount;