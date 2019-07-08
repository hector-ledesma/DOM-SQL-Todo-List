<?php
include_once './dbconnect.php';
        $sql = "SELECT * FROM items;";
        $result = mysqli_query($conn, $sql);
        $dbdata = array();
        $resultCheck = mysqli_num_rows($result);

        
        if($resultCheck > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $dbdata[]=$row;
            }
        }

        echo json_encode($dbdata);