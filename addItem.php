<?php
include_once './dbconnect.php';

$item = $_POST['item'];

$sql = "INSERT INTO items (item) VALUES ('$item');";
$result = mysqli_query($conn, $sql);

header("Location: index.php");