<?php
include_once './dbconnect.php';
    $id = $_REQUEST['itemid'];
    $sql = "SELECT item FROM items WHERE id=$id;";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);    
        if($resultCheck > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $dbdata=$row;
            }
        }
        echo json_encode($dbdata);