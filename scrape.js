//For building the query string
var scrape = function(input, callback) {
    var querystring = require('querystring');
    var http = require('http');

    function buildPostReq(input) {
        var post_data = querystring.stringify({
            'from_station': input.from_station,
            'to_station': input.to_station,
            'via_station': input.via_station,
            'via_min_time': input.via_min_time,
            'date': input.date,
            'dep_arr': input.dep_arr,
            'time_from': input.time_from,
            'time_to': input.time_to,
            'all_cats': input.all_cats,
            'cardld': input.cardld,
            'class': input.class,
            'sort_by': input.sort_by,
            'x': input.x,
            'y': input.y
        });

        return post_data;
    }

    var data = {}
    data.from_station = "София"
    data.to_station = "Варна"
    data.via_station = ""
    data.via_min_time = "00:01"
    data.date = "25/05/2014"
    data.dep_arr = "1"
    data.time_from = "00:00"
    data.time_to = "24:00"
    data.all_cats = "checked"
    data.cardld = "30"
    data.class = "0"
    data.sort_by = "0"
    data.x = "24"
    data.y = "12"

    //Adopt new parameters
    input.from === undefined ? console.log('No `from` input') : data.from_station = input.from;
    input.to === undefined ? console.log('No `to` input') : data.to_station = input.to;
    input.date === undefined ? console.log('No `to` input') : data.date = input.date;
    //TODO: add more parameters that can be queried.
    var post_data = buildPostReq(data);
    // console.log(post_data);
    var options = {
        host: 'razpisanie.bdz.bg',
        port: 80,
        path: '/SearchServlet?action=listOptions',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
        }
    };

    var req = http.request(options, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            callback(data);
        });
    });

    //Write the request params
    req.write(post_data);
    req.end();
};

exports.scrape = scrape;