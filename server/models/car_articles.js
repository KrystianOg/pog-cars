const db = require('../config/db')

class Car_article{
    constructor(article_id, car_id){
        this.article_id = article_id;
        this.car_id = car_id;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO car_articles(
            article_id, 
            car_id
            ) VALUES (
            ${this.article_id},
            ${this.car_id}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM car_articles;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM car_articles WHERE car_article_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Car_article;