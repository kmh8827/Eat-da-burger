const connection = require('./connection');

const orm = {

 selectAll(tableInput, cb) {
    const search = `SELECT * FROM ${tableInput}`
    connection.query(search, (err, results) => {
        if (err) throw err;
        cb(results);
    });
 },

 insertOne(table, cols, vals, cb) {
    const search = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
    console.log(search);
    connection.query(search, (err, results) => {
        if(err) throw err;
        cb(results);
    })
 },

 updateOne(table, values, condition, cb) {
    const search = `UPDATE burgers SET ${tableInput} WHERE ${condition}`
    connection.query(search, (err, results) => {
        if (err) throw err;
        cb(results);
    });
 }

};

module.exports = orm;