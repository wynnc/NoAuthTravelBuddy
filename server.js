var express = require("express");

// bring in the models
var db = require("./models");


const app = express();

// Static directory
// middleware
app.use(express.static('client'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("pug", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
