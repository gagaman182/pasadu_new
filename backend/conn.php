<?php

// hospital
$servername = "192.168.4.3";
$username = "root";
$password = "1234";
$dbname = "pasadu";
$port = "3306";

//187
// $servername = "192.168.5.187";
// $username = "root";
// $password = "123456";
// $dbname = "pasadu";
// $port = "3333";

// $servername = "192.168.5.1";
// $username = "root";
// $password = "123456";
// $dbname = "pasadu";
// $port = "3333";

// home
// $servername = "localhost";
// $username = "root";
// $password = "123456789";
// $dbname = "pasadu";
// $port = "3306";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn -> set_charset("utf8");

?>