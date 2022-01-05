const db = require('../config/db')

class Article{
    constructor(creator_id, deleted, title, content){
        this.creator_id = creator_id;
        this.deleted = deleted;
        this.title = title;
        this.content = content;
    }

    save(){
        // save to db
        let d = new Date();
        let yyyy = d.getFullYear();

        let sql = `INSERT INTO articles(
            creator_id,
            deleted,
            title,
            content
            ) VALUES (
            ${this.creator_id},
            ${this.deleted},
            '${this.title}',
            '${this.content}'
            )`

        
        return db.execute(sql);
    }

    // filters

    static findAll(){
        let sql = "SELECT * FROM articles;"

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM articles WHERE article_id=${id}`;

        return db.execute(sql);
    }

    // updating
    static removeArticle(id)
    {
        let sql = `UPDATE articles SET deleted = 1 WHERE article_id=${id}`;
        return db.execute(sql);
    }
}

module.exports = Article;