const db = require('../config/db')
var Filter = require('bad-words'); // bad word filter - test

/*
var filter = new Filter();
console.log(filter.clean("chuj dupa kupa fiut kurwa"));
*/

class Comment{
    constructor(user_id, article_id, deleted, content){
        this.user_id = user_id;
        this.article_id = article_id;
        this.deleted = deleted;
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

    static findAll(){
        let sql = "SELECT * FROM comments;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM comments WHERE comment_id=${id}`;

        return db.execute(sql);
    }

    // updating

    // censor vulgar comment

    static censorComment(id){
        let sql = ``;

        return db.execute(sql);
    }

    removeComment(id)
    {
        let sql = 'UPDATE';

        return db.execute(sql);
    }
}

module.exports = Comment;