<?php

include "config.php";
header("Access-Control-Allow-Origin: https://hxj0776.uta.cloud");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $oldpassword = $request->oldpassword;
    $password = $request->password;
    $email = $request->email;

    $select = " SELECT * FROM person WHERE email = '$email' && password = '$oldpassword' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){
        $update = "UPDATE person SET password='$password' WHERE email='$email'";
        if(mysqli_query($conn, $update)){
            echo json_encode(array(
                "Success" => 'Password Changed'
            ));
        }else{
            echo json_encode(array(
                "Error" => 'Unable to update password'
            ));
        }
        
    }else{
        echo json_encode(array(
            "Error" => 'Invalid old password'
        ));
    }
}else{
    echo json_encode(array(
        "Error" => 'Error!!'
    ));
}
?>