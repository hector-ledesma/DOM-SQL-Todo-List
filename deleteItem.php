<?php
include_once './dbconnect.php';

$id = $_REQUEST['testin'];

$sql = "DELETE FROM items WHERE id=$id";
$result = mysqli_query($conn, $sql);

header("Location: index.php");
