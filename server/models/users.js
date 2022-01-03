const db = require('../config/db')

class User{
    constructor(firstname, lastname, birth_date, username, email, type, deleted, salt, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth_date = birth_date;
        this.username = username;
        this.email = email;
        this.type = type;
        this.deleted = deleted;
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
            deleted,
            salt,
            password
            ) VALUES (
            ${this.firstname},
            ${this.lastname},
            ${this.birth_date},
            ${this.username},
            ${this.email},
            ${this.type},
            ${this.deleted},
            ${this.salt},
            ${this.password}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM users;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM users WHERE user_id=${id}`;

        return db.execute(sql);
    }

    // updating

    promoteToEmployee(){
        let sql = ``;

        return db.execute(sql);
    }

    promoteToAdmin(){
        let sql = ``;

        return db.execute(sql);
    }

    // other things

    // add a star rating from the user to the agent, where id is agent's id
    rateAgent(id){
        let sql = ``;

        return db.execute(sql);
    }
}

module.exports = User;