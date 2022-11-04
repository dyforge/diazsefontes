<?php

include "config.php";


header("Access-Control-Allow-Origin: https://hxj0776.uta.cloud");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    $sql = "SELECT * FROM person WHERE email = '$email'";
    $res = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($res);
    if($count == 1){
        $r = mysqli_fetch_assoc($res);
        $password = $r['password'];
        $firstname = $r['first_name'];
        $mail = new PHPMailer(true);
        try {
            //Server settings
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'wdmsmtp2022@gmail.com';                     //SMTP username
            $mail->Password   = 'arnqzxvlrliajoyj';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;//PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('wdmsmtp2022@gmail.com', 'Mailer');
            $mail->addAddress($email);     //Add a recipient
            //$mail->addAddress('ellen@example.com');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = "Your Recovered Password";
            $mail->Body    = "Hi $firstname, Please use this password to login " . $password;
            

            if($mail->Send()) {
                echo json_encode(array(
                    "Success" => 'An email has been sent to your email address'
                ));
            }
        } catch (Exception $e) {
            echo json_encode(array(
                "Error" => 'Message could not be sent. Mailer Error'
            ));
        }

    }else{
        echo json_encode(array(
            "Error" => 'Email Id not found in our database'
        ));
    }
}
?>