const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('api/burgers', (req, res) => {
    console.log(req);
    burger.insertOne(['burger_name','devoured'], [req.body.name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`

    console.log('condition', condition);

    burger.updateOne(
        {
            devoured: req.body.devoured,
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