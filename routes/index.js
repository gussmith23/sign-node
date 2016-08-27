var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function(req, res) {
  res.render('sign');
});

router.post('/sign', function(req, res) {
  exec("perl /home/gus/ledsign/ledsign.perl '" + req.body.message + "'");
  res.redirect("/sign");
});

module.exports = router;
