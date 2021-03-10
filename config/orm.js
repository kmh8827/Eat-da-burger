const connection = require('./connection');

// Used to Add ? For SQL Database
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    console.log(arr.toString());
    return arr.toString();
};

// Used to Format object to SQL Format
const objToSql = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        // Checks for hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
       
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }

            arr.push(`${key}=${value}`);
        }
    }

    return arr.toString();
};

const orm = {
    // Displays all Burgers
    selectAll(tableInput, cb) {
        const search = `SELECT * FROM ${tableInput}`
        connection.query(search, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    // Adds new Burger to database
    insertOne(table, cols, vals, cb) {
        const search = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        console.log("the search is " + search);
        console.log('values ' + vals);
        connection.query(search,vals, (err, results) => {
            if (err) throw err;
            cb(results);
        })
    },
    // Eats a Burger
    updateOne(table, values, condition, cb) {
        const search = `UPDATE ${table} SET ${objToSql(values)} WHERE ${condition}`;
        connection.query(search, values, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }

};

module.exports = orm;