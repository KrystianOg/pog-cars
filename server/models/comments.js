const db = require('../config/db')

class Comment{
    constructor(user_id, article_id, content){
        this.user_id = user_id;
        this.article_id = article_id;
        this.content = content;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            user_id,
            article_id,
            content
            ) VALUES (
            ${this.user_id},
            ${this.article_id},
            ${this.content}
            )`

        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM comments;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM comments WHERE comment_id=${id}`;

        return db.execute(sql);
    }
}

module.exports = Comment;