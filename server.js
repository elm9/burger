var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// use public folder
app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// require handlebars
var exphbs = require("express-handlebars");

// default layout is main.handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// import routes to server from burgers_controller.js
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// console.log PORT when connected
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});