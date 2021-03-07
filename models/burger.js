const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cb) {
        orm.insertOne('burgers', cols, values, (res) => cb(res));
    },
    updateOne(cb) {
        orm.updateOne('burgers', values, condition, (res) => cb(res)); 
    }
};

module.exports = burger;