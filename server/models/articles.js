const db = require('../config/db')

class Article{
    constructor(creator_id, title, content){
        this.creator_id = creator_id;
        this.title = title;
        this.content = content;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO articles(
            creator_id,
            title,
            content
            ) VALUES (
            ${this.creator_id},
            ${this.title},
            ${this.content}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM articles;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM agencies WHERE agency_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Article;