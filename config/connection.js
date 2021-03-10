const mysql = require('mysql');
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Threshmain',
        database: 'burgers_db'
    });
};

connection.connect((err) => {
    if (err) throw (err);

    console.log(`Connected with id  ${connection.threadId}`);
});

module.exports = connection;