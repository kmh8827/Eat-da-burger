const mysql = require('mysql');

const connection = mysql.createConnectioncreateConnection(
    host = 'localhost',
    port = 3306,
    user = 'root',
    password = 'Threshmain',
    database = 'burgers_db'
);

connection.createConnection( (err) => {
    if (err) throw (err);

    console.log(`Connected with id  ${connection.threadId}`);
});

module.exports = connection;