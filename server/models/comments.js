const db = require('../config/db')
var Filter = require('bad-words'); // bad word filter - test

class Comment{
    constructor(user_id, article_id, content){
        this.user_id = user_id;
        this.article_id = article_id;
        this.deleted = 0;
        var filter = new Filter();
        this.content = filter.clean(content);
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

    static findById(id){
        let sql = `SELECT * FROM comments WHERE comment_id=${id} AND deleted = 0;`;

        return db.execute(sql);
    }
    

    static findByArticleId(id){
        let sql = `SELECT * FROM comments WHERE article_id=${id} AND deleted = 0;`;
        return db.execute(sql);
    }

    // updating

    // censor vulgar comment - PATCH
    static censorComment(id){
        let sql = `UPDATE comments SET deleted=2 WHERE comment_id=${id};`;
        return db.execute(sql);
    }

    static removeComment(id)
    {
        let sql = `UPDATE comments SET deleted = 1 WHERE comment_id=${id};`;
        return db.execute(sql);
    }
}

module.exports = Comment;