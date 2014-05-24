// AJAX Request: БДЖ - търсене на влакове (http://razpisanie.bdz.bg/SearchServlet?action=listOptions)

$.ajax({
    url: "http://razpisanie.bdz.bg/SearchServlet?action=listOptions",
    type: "POST",
    timeout: 30000,

    // Request Body: http://razpisanie.bdz.bg/SearchServlet?action=listOptions

    data: {
        "from_station": "\320\222\320\220\320\240\320\235\320\220",
        "to_station": "\320\241\320\236\320\244\320\230\320\257",
        "via_station": "",
        "via_min_time": "00:01",
        "date": "25/05/2014",
        "dep_arr": "1",
        "time_from": "00:00",
        "time_to": "24:00",
        "all_cats": "checked",
        "cardld": "30",
        "class": "0",
        "sort_by": "0",
        "x": "24",
        "y": "12",
    },

    // Success Callback: http://razpisanie.bdz.bg/SearchServlet?action=listOptions

    success: function(data, textStatus) {
        console.log("Received response HTTP " + textStatus + " (http://razpisanie.bdz.bg/SearchServlet?action=listOptions)");
        document.writeln(data);
    },

    // Error Callback: http://razpisanie.bdz.bg/SearchServlet?action=listOptions

    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error during request " + textStatus + " (http://razpisanie.bdz.bg/SearchServlet?action=listOptions)");
        console.log(errorThrown);
    },
});