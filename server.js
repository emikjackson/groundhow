var express = require('express');
var path = require('path');
var logger = require('morgan');
//var compression = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
//var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var exphbs = require('express-handlebars');
//var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');

// Load environment variables from .env file
dotenv.load();

// Controllers
var HomeController = require('./controllers/home');
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');
var quizController = require('./controllers/quiz');

// Passport OAuth strategies
require('./config/passport');
var app = express();

/*
mongoose.connect('mongodb://localhost/quiz_info')
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});*/

var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
//app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
//app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
//app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views/quiz_pages')));
app.use(cors());

app.get('/', HomeController.index);
app.get('/quiz', quizController.quizGet);
app.get('/scoresheet', quizController.ssGet);
app.get('/Q1', quizController.Q1Get);
app.get('/Q2', quizController.Q2Get);
app.get('/Q3', quizController.Q3Get);
app.get('/Q4', quizController.Q4Get);
app.get('/Q5', quizController.Q5Get);
app.get('/Q6', quizController.Q6Get);
app.get('/Q7', quizController.Q7Get);
app.get('/Q8', quizController.Q8Get);
app.get('/Q9', quizController.Q9Get);
app.get('/Q10', quizController.Q10Get);

app.get('/Q1a', quizController.Q1aGet);
app.get('/Q2a', quizController.Q2bGet);
app.get('/Q3a', quizController.Q3aGet);
app.get('/Q4a', quizController.Q4aGet);
app.get('/Q5a', quizController.Q5aGet);
app.get('/Q6a', quizController.Q6aGet);
app.get('/Q7a', quizController.Q7aGet);
app.get('/Q8a', quizController.Q8aGet);
app.get('/Q9a', quizController.Q9aGet);
app.get('/Q10a', quizController.Q10aGet);

app.get('/Q1b', quizController.Q1bGet);
app.get('/Q2b', quizController.Q2bGet);
app.get('/Q3b', quizController.Q3bGet);
app.get('/Q4b', quizController.Q4bGet);
app.get('/Q5b', quizController.Q5bGet);
app.get('/Q6b', quizController.Q6bGet);
app.get('/Q7b', quizController.Q7bGet);
app.get('/Q8b', quizController.Q8bGet);
app.get('/Q9b', quizController.Q9bGet);
app.get('/Q10b', quizController.Q10bGet);

app.get('/Q1c', quizController.Q1cGet);
app.get('/Q2c', quizController.Q2cGet);
app.get('/Q3c', quizController.Q3cGet);
app.get('/Q4c', quizController.Q4cGet);
app.get('/Q5c', quizController.Q5cGet);
app.get('/Q6c', quizController.Q6cGet);
app.get('/Q7c', quizController.Q7cGet);
app.get('/Q9c', quizController.Q9cGet);
app.get('/Q10c', quizController.Q10cGet);

app.get('/Q1d', quizController.Q1dGet);
app.get('/Q2d', quizController.Q2dGet);
app.get('/Q3d', quizController.Q3dGet);
app.get('/Q4d', quizController.Q4dGet);
app.get('/Q5d', quizController.Q5dGet);
app.get('/Q6d', quizController.Q6dGet);
app.get('/Q7d', quizController.Q7dGet);
app.get('/Q9d', quizController.Q9dGet);
app.get('/Q10d', quizController.Q10dGet);

app.get('/results', quizController.resultsGet);
app.get('/contact', contactController.contactGet);
app.post('/contact', contactController.contactPost);
app.get('/account', userController.ensureAuthenticated, userController.accountGet);
app.put('/account', userController.ensureAuthenticated, userController.accountPut);
app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
app.get('/signup', userController.signupGet);
app.post('/signup', userController.signupPost);
app.get('/login', userController.loginGet);
app.post('/login', userController.loginPost);
app.get('/forgot', userController.forgotGet);
app.post('/forgot', userController.forgotPost);
app.get('/reset/:token', userController.resetGet);
app.post('/reset/:token', userController.resetPost);
app.get('/logout', userController.logout);
app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
