var express = require('express');

var router = express.Router();

 

/* READ, UPDATE, DELETE users */

router.get('/', function(req, res) {

  res.send('Show user list with delete and update feature (RUD)');

});

 

/* INSERT user */

router.get('/insert_user', function(req, res) {

      res.send("Insert a new user (C)");

});

 

/* NEW user */

router.get('/new', function(req, res) {

      res.render('user-new');

});

 

module.exports = router;