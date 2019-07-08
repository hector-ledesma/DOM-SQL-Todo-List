<?php
include_once './dbconnect.php';

$id = $_POST["id"];
$updated = $_POST["new"];

$sql = "UPDATE items SET item='$updated' WHERE id='$id';";
$result = mysqli_query($conn, $sql);


echo "Received";
// header("Location: index.php");