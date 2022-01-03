const db = require('../config/db')

class Agency{
    constructor(country, voivodeship, city, postcode, street, address, deleted){
        this.country = country;
        this.voivodeship = voivodeship;
        this.city = city;
        this.postcode = postcode;
        this.street = street;
        this.address = address;
        this.deleted = deleted;
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
            address,
            deleted
            ) VALUES (
            ${this.country},
            ${this.voivodeship},
            ${this.city},
            ${this.postcode},
            ${this.street},
            ${this.address},
            ${this.deleted}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM agencies;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM agencies WHERE agency_id=${id}`;

        return db.execute(sql);
    }

    // updating

    // removal - same as update in this scenario

    static removeAgency(id){
        let sql = '';

        return db.execute(sql);
    }

    // changing agency's location

    static moveAgency(id, country, voivodeship, city, postcode, street, address){
        let sql = '';

        return db.execute(sql);
    }
}

module.exports = Agency;