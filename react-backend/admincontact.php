<?php

include "config.php";
header("Access-Control-Allow-Origin: https://hxj0776.uta.cloud");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $select = " SELECT * FROM contactus";
    $result = mysqli_query($conn, $select);
    if (mysqli_num_rows($result) > 0){
        $rowsarray = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rowsarray[] = $row;
        }
        $rowsarray= json_encode($rowsarray);
        http_response_code(200);
        echo '{"contactData": '.$rowsarray.'}';
    }else{
    http_response_code(422);
    echo '{"error":"Error"}';
    }   
}
?> 