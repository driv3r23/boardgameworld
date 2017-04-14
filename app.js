const express = require('express');

var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

app.use(function (req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    if(err.status !== 404) return next();

    res.status(err.status);
    res.send('[404] Not Found');
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send('[500] Internal Server Error');
});

module.exports = app;