// import orm.js
var orm = require("../config/orm.js");

var burger = {
    // selectAll()
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // insertOne()
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // // updateOne()
    // updateOne: function( cb){
    //     orm.updateOne("burgers")
    // }
}

// export burger
module.exports = burger;