var express = require('express');
var path = require('path');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
var dotenv = require('dotenv');
// var userInViews = require('./lib/middleware/userInViews');
// var authRouter = require('./routes/auth');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
dotenv.load();
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

// app.engine("pug", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

var routes = require("./routes");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
