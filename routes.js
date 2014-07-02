var debug = require('debug')('yobell');
var express = require('express');
var router = express.Router();

var model = require('./model');

// Home page
router.get('/', function(req, res) {
    res.render('index', { title: 'Yobell' });
});

// Web Yo callback
router.post('/webyo', function(req, res) {
    debug('Got web-YO from ip ' + req.ip);
    model.yoall();
    res.redirect('/');
});

// Yo API callback
router.get('/yo', function(req, res) {
    debug('Got YO from ' + req.param('username') + ' ip ' + req.ip);
    model.yoall();
    res.send(200);
});

module.exports = router;
