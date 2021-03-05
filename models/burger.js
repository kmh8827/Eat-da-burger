const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cb) {
        orm.insertOne(values, (res) => cb(res));
    },
    updateOne(cb) {
        orm.updateOne(values, condition, (res) => cb(res)); 
    }
};

module.exports = burger;