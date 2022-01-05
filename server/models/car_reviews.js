const db = require('../config/db')

class Car_review{
    constructor(car_id, user_id, message, star_rating){
        this.car_id = car_id;
        this.user_id = user_id;
        this.message = message;
        this.star_rating = star_rating;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO car_reviews(
            car_id,
            user_id,
            message,
            star_rating
            ) VALUES (
            ${this.car_id},
            ${this.user_id},
            '${this.message}',
            ${this.star_rating}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM car_reviews;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM car_reviews WHERE car_review_id=${id}`;

        return db.execute(sql);
    }

    // find articles about a specific car

    static findAboutACar(car_id){
        let sql = `SELECT * FROM car_reviews WHERE car_id=${car_id}`;

        return db.execute(sql);
    }

    // updating

    //censor vulgar review

    static censorReview(id){
        let sql = ``;

        return db.execute(sql);
    }
}


module.exports = Car_review;