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
            '${this.country}',
            '${this.voivodeship}',
            '${this.city}',
            '${this.postcode}',
            '${this.street}',
            '${this.address}',
            ${this.deleted}
            )`

        
        return db.execute(sql);
    }

    // filters

    //maybe do this one for agent/admin?
    static findAll(){
        let sql = "SELECT * FROM agencies;"

        return db.execute(sql);
    }

     //find non-deleted - maybe useful for user?
    static findNotDeleted(id){
        let sql = `SELECT * FROM agencies WHERE deleted = 0`;

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM agencies WHERE agency_id=${id}`;

        return db.execute(sql);
    }

    static findByCountry(id){
        let sql = `SELECT * FROM agencies WHERE country=${country}`;

        return db.execute(sql);
    }

    static findByVoivodeship(id){
        let sql = `SELECT * FROM agencies WHERE voivodeship=${voivodeship}`;

        return db.execute(sql);
    }

    static findByCity(id){
        let sql = `SELECT * FROM agencies WHERE city=${city}`;

        return db.execute(sql);
    }

    static findByPostcode(id){
        let sql = `SELECT * FROM agencies WHERE postcode=${postcode}`;

        return db.execute(sql);
    }

    static findByStreet(street){
        let sql = `SELECT * FROM agencies WHERE street=${street}`;
    }


    // updating

    // removal - same as update in this scenario
    // pamietac o przesunieciu aut z tej agencji
    static removeAgencyById(id){
        let sql = `UPDATE agencies SET deleted = 1 WHERE agency_id=${id}`;
        return db.execute(sql);
    }

    // changing agency's location
    /* to nawet nie jest w wymaganiach
    static moveAgencyById(id, country, voivodeship, city, postcode, street, address){
        let sql = `UPDATE agencies SET country=${country} WHERE agency_id=${id}`;

        return db.execute(sql);
    }
    */
}

module.exports = Agency;