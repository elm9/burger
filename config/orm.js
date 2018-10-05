// require connection.js 
var connection = require("../config/connection.js");

// print question marks
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

// obj to sql function
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    // selectAll()
    selectAll: function (tableinput, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // insertOne()
    insertOne: function (cols, vals, cb) {
        
        var queryString = "INSERT INTO burgers (";
        queryString += cols.toString;
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")"
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // updateOne()
        updateOne: function(){

        }
}



module.exports = orm;