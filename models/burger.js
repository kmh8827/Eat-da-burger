const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cols, values, cb) {
        console.log("burgervals " + values);
        orm.insertOne('burgers', cols, values, (res) => cb(res));
    },
    updateOne(values, condition, cb) {
        orm.updateOne('burgers', values, condition, (res) => cb(res)); 
    }
};

module.exports = burger;