const express = require('express');

const router = express.Router();

const burger = require('../models/burger');
// Displays the Burgers from Database
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    });
});
// Handles the adding of Burgers to Database
router.post('/api/burgers', (req, res) => {
    console.log("req.body is " + req.body);
    burger.insertOne(['burger_name','devoured'], [req.body.burger_name, false], (result) => {
        res.json({ id: result.insertId });

    });
});
// Handles the Eating of Burgers
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (results) => {
            if (results.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;