const connection = require('./connection');

const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

const objToSql = (ob) => {
    const arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(`${key}=${value}`);
        }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

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
            if (err) throw err;
            cb(results);
        })
    },

    updateOne(table, values, condition, cb) {
        const search = `UPDATE ${table} SET ${objToSql(values)} WHERE ${condition}`
        connection.query(search, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }

};

module.exports = orm;