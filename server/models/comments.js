const db = require('../config/db')

class Comment{
    constructor(user_id, article_id, deleted, content){
        this.user_id = user_id;
        this.article_id = article_id;
        this.deleted = deleted;
        this.content = content;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO comments(
            user_id,
            article_id,
            deleted,
            content
            ) VALUES (
            ${this.user_id},
            ${this.article_id},
            ${this.deleted},
            '${this.content}'
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM comments WHERE deleted = 0;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM comments WHERE comment_id=${id} AND deleted = 0;`;

        return db.execute(sql);
    }

    // updating

    // censor vulgar comment

    static censorComment(id){
        let sql = ``;

        return db.execute(sql);
    }

    static removeComment(id)
    {
        let sql = `UPDATE comments SET deleted = 1 WHERE comment_id=${id};`;

        return db.execute(sql);
    }
}

module.exports = Comment;