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
    $gender = $request->gender;
    $num_child = $request->num_child;
    $ancestor_email = $request->ancestor_email;
    $age = $request->age;
    $password = $request->password;
    $select = " SELECT * FROM person WHERE email = '$email' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){

        echo json_encode(array(
            "Error" => 'User already Exists!'
        ));
  
     }else{
        $insert = "INSERT INTO person(email, first_name, last_name, password, gender, num_child, ancestor_email, role, age) VALUES('$email','$first_name','$last_name','$password','$gender','$num_child','$ancestor_email','member','$age')";
        if(mysqli_query($conn, $insert)){
            http_response_code(201);
            echo json_encode(array(
                "Success" => 'User registered'
            ));
        }else{
            http_response_code(422);
            echo json_encode(array(
                "Error" => 'Error in registration'
            ));
        }

        
     }       
}
?> 