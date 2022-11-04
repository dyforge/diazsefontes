<?php

include "config.php";
header("Access-Control-Allow-Origin: https://hxj0776.uta.cloud");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $email = $request->email;
    $description = $request->description;
    $contact_number = $request->contact_number;
    $insert = "INSERT INTO contactus (first_name,last_name,contact_number,description,email) VALUES('$first_name','$last_name','$contact_number','$description','$email')";
    if(mysqli_query($conn, $insert)){
        http_response_code(201);
        echo json_encode(array(
            "Success" => 'Thank You for Contacting Us'
        ));
    }else{
        http_response_code(421);
        echo json_encode(array(
            "Error" => 'Unable to submit request'
        ));
    }    
}
?> 