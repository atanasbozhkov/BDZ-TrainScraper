<?php
// Request: БДЖ - търсене на влакове (http://razpisanie.bdz.bg/SearchServlet?action=listOptions)

$ch = curl_init("http://razpisanie.bdz.bg/SearchServlet?action=listOptions");
curl_setopt($ch, CURLOPT_POST, TRUE);

// Body

$body_parameters = array(
	"from_station" => "\320\222\320\220\320\240\320\235\320\220",
	"to_station" => "\320\241\320\236\320\244\320\230\320\257",
	"via_station" => "",
	"via_min_time" => "00:01",
	"date" => "25/05/2014",
	"dep_arr" => "1",
	"time_from" => "00:00",
	"time_to" => "24:00",
	"all_cats" => "checked",
	"cardld" => "30",
	"class" => "0",
	"sort_by" => "0",
	"x" => "24",
	"y" => "12",
);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($body_parameters));

// Send synchronously

curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
$result = curl_exec($ch);

// Failure
if ($result === FALSE)
{
	echo "cURL Error: " . curl_error($ch);
}

// Success
else
{
	echo "Request completed: " . $result;
}

curl_close($ch);
?>