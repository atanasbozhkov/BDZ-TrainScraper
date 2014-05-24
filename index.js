var express = require('express')
var s = require('./scrape')
var app = express();

app.get('/', function(req, res) {
    s.scrape(function(data) {
        var urlParams = {
            from: req.query.from,
            to: req.query.to
        }
        // var from = req.query.from;
        // var to = req.query.to;
        console.log(urlParams.to);
        res.send(data);
    })
});

var port = 3000;

app.listen(port);
console.log('Running server on port: ' + port)