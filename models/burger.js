const orm = require('../config/orm');

const burger = {
    // Used to Display Burgers
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    // Used to Create New Burgers
    insertOne(cols, values, cb) {
        console.log("burgervals " + values);
        orm.insertOne('burgers', cols, values, (res) => cb(res));
    },
    // Used to Eat a Burger
    updateOne(values, condition, cb) {
        orm.updateOne('burgers', values, condition, (res) => cb(res)); 
    }
};

module.exports = burger;