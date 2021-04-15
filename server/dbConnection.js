const dbConfig = require('./dbConfig');
const mysql = require('mysql');


const connection  = mysql.createConnection({
    host:   dbConfig.db_host,
    user:   dbConfig.db_user,
    pass:   dbConfig.db_pass,
    database: dbConfig.db_name 
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Successfully Connected to the database')
});

module.exports = connection;
