var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var soundboard = require('soundboard')(soundsPath);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function(req, res) {
  res.render('sign');
});

router.post('/sign', function(req, res) {
  perl = spawn("/usr/bin/perl", [scriptsPath + "/ledsign.perl", req.body.message]);
  perl.stderr.on('data', function(data) { console.error("" + data); });
  res.redirect("/sign");
});

router.get('/soundboard', function(req, res) {
  res.render('soundboard', {sounds: soundboard.getSounds()});
});

router.post('/soundboard', function(req, res) {
  soundboard.playSound(req.body.file);
  res.redirect('/soundboard');
});

module.exports = router;
