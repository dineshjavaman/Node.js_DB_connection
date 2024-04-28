const mysql = require('mysql');
const dbconfig = require('../config/db.config.js');

//create connection
const connection = mysql.createConnection({
    host: dbconfig.MYSQL.host,
    user: dbconfig.MYSQL.user,
    password: dbconfig.MYSQL.password,
    database: dbconfig.MYSQL.database,
    multipleStatements: true
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Mysql Connected...');
});
module.exports = connection;