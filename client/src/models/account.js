class Account{
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
}

module.exports = Account;