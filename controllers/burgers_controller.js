// import express
var express = require("express");
var router = express.Router();
// import burger.js
var burger = require("../models/burger.js");

// show all burgers from database -- selectAll
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerList = {
            burgers: data
        };
        // console.log(burgerLisrdt);
        res.render("index", burgerList);
    });
});

// add a new burger to database -- insertOne
router.post("/api/burgers", function (req, res) {
    burger.insertOne(['burger_name'], [req.body.burger_name], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

// update an existing burger to devoured -- updateOne



// export router
module.exports = router;