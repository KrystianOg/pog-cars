const db = require('../config/db')

class User{
    constructor(firstname, lastname, birth_date, username, email, type, deleted){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth_date = birth_date;
        this.username = username;
        this.email = email;
        this.type = type;
        this.deleted = deleted;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO users(
            firstname,
            lastname,
            birth_date,
            username,
            email,
            type,
            deleted
            ) VALUES (
            '${this.firstname}',
            '${this.lastname}',
            '${this.birth_date}',
            '${this.username}',
            '${this.email}',
            '${this.type}',
            ${this.deleted}
            )`
        return db.execute(sql);
    }

    // filters
    static findAll(){
        let sql = "SELECT user_id, firstname, lastname, birth_date, username, email, type, deleted FROM users;"

        return db.execute(sql);
    }

       // filters
       static findEmployees(){
        let sql = "SELECT user_id, firstname, lastname, birth_date, username, email, type, deleted FROM users WHERE type='AGENT';"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT user_id, firstname, lastname, birth_date, username, email, type, deleted FROM users WHERE user_id=${id}`;

        return db.execute(sql);
    }
    
    // fullfill requirements
    static fullfillRequirement(requirement,id){
        //let sql = `CALL fullfillRequirement('${requirement}',${id});`; ??
        return parseBoolean(db.execute(sql))
    }

    // usuwanie pracownikow
    static deleteUser(id){
        let sql = `UPDATE users SET deleted=1 WHERE user_id=${id};`;

        return db.execute(sql);
    }
    // other things

    // add a star rating from the user to the agent, where id is agent's id
    static rateAgent(agent_id,user_id,message,star_rating){
        let sql = `INSERT INTO agent_reviews (agent_id,user_id,message,star_rating) VALUES (${agent_id},${user_id},'${message}',${star_rating});`;
        return db.execute(sql);
    }
}

module.exports = User;