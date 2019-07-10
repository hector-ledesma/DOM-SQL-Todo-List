<?php

$serverName = "remotemysql.com";
$username = "tM4qU1hK9s";
$password = "5jK2TGm0gB";
$name = "tM4qU1hK9s";

$conn = mysqli_connect($serverName, $username, $password, $name);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}