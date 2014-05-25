var express = require('express')
var s = require('./scrape')
var app = express();

app.get('/', function(req, res) {
    var urlParams = {
        from: req.query.from,
        to: req.query.to,
        date: req.query.date
    }
    s.scrape(urlParams, function(data) {
        // var from = req.query.from;
        // var to = req.query.to;
        // console.log(urlParams.to);
        res.send(data);
    })
});

var port = 3000;

app.listen(port);
console.log('Running server on port: ' + port)