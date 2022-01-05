//stolen from https://stackoverflow.com/questions/30921435/nodejs-backup-mysql-database
// idk if it works

const db = require('../config/db')
var fs = require('fs');
var spawn = require('child_process').spawn;
var wstream = fs.createWriteStream('pog_cars_copy.sql');

var mysqldump = spawn('db', [
    '-u',
    process.env.DB_HOST,
    '-p',
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
]);

mysqldump
    .stdout
    .pipe(wstream)
    .on('finish', function () {
        console.log('Completed')
    })
    .on('error', function (err) {
        console.log(err)
    });