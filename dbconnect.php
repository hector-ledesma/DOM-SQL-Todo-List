<?php

$serverName = "localhost";
$username = "root";
$password = "1234";
$name = "list";

$conn = mysqli_connect($serverName, $username, $password, $name);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}