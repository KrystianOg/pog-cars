const db = require('../config/db')

class Log{
    constructor(log_time, user_id, message, operation){
        this.log_time = log_time;
        this.user_id = user_id;
        this.message = message;
        this.operation = operation;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            log_time,
            user_id,
            message,
            operation
            ) VALUES (
            ${this.log_time},
            ${this.user_id},
            ${this.message},
            ${this.operation}
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM log;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM log WHERE log_id=${id}`;

        return db.execute(sql);
    }

    // updating
}

module.exports = Log;