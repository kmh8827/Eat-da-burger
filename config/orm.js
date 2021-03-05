const { builtinModules } = require('module');
const connection = require('./connection');

const orm = {

 selectAll(tableInput, cb) {
    const search = `SELECT ${tableInput} FROM burgers`
    connection.query(search, (err, results) => {
        if (err) throw err;
        cb(results);
    });
 },

 insertOne(tableInput, cb) {
    const search = `INSERT ${tableInput} INTO burgers (burger_name, devoured)`
    connection.query(search, (err, results) => {
        if(err) throw err;
        cb(results);
    })
 },

 updateOne(tableInput, condition, cb) {
    const search = `UPDATE burgers SET ${tableInput} WHERE ${condition}`
    connection.query(search, (err, results) => {
        if (err) throw err;
        cb(results);
    });
 }

};

module.exports = orm;