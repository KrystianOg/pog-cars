const db = require('../config/db')

class Rental_history{
    constructor(firstname, lastname, birth_date, username, email, type, salt, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth_date = birth_date;
        this.username = username;
        this.email = email;
        this.type = type;
        this.salt = salt;
        this.password = password;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            firstname,
            lastname,
            birth_date,
            username,
            email,
            type,
            salt,
            password
            ) VALUES (
            ${this.firstname},
            ${this.lastname},
            ${this.birth_date},
            ${this.username},
            ${this.email},
            ${this.type},
            ${this.salt},
            ${this.password}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM users;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM users WHERE user_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = User;