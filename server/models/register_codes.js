const db = require('../config/db')

class Register_code{
    constructor(code_hash, user_id, expiration){
        this.code_hash = code_hash;
        this.user_id = user_id;
        this.expiration = expiration;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            code_hash
            user_id,
            expiration
            ) VALUES (
            ${this.code_hash},
            ${this.user_id},
            ${this.expiration}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM register_codes;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM register_codes WHERE register_code_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Register_code;