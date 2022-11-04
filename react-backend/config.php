<?php
$servername = "localhost";
$username = "hxj0776_root";
$password = "wdmproject2022";
$dbname = "hxj0776_wdmproject";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
