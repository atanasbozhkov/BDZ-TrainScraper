//For building the query string
var scrape = function(callback) {
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

    var input = {}
    input.from_station = "София"
    input.to_station = "Варна"
    input.via_station = ""
    input.via_min_time = "00:01"
    input.date = "25/05/2014"
    input.dep_arr = "1"
    input.time_from = "00:00"
    input.time_to = "24:00"
    input.all_cats = "checked"
    input.cardld = "30"
    input.class = "0"
    input.sort_by = "0"
    input.x = "24"
    input.y = "12"

    var post_data = buildPostReq(input);
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