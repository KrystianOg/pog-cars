const db = require('../config/db')

class Agency{
    constructor(country, voivodeship, city, postcode, street, address){
        this.country = country;
        this.voivodeship = voivodeship;
        this.city = city;
        this.postcode = postcode;
        this.street = street;
        this.address = address;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO agencies(
            country,
            voivodeship,
            city,
            postcode,
            street,
            address
            ) VALUES (
            ${this.country},
            ${this.voivodeship},
            ${this.city},
            ${this.postcode},
            ${this.street},
            ${this.address},
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM agencies;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM agencies WHERE agency_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Agency;