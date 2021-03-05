const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Threshmain',
    databse: 'burgers_db'
});

connection.connect((err) => {
    if (err) throw (err);

    console.log(`Connected with id  ${connection.threadId}`);
});

module.exports = connection;