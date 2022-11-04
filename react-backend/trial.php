<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: https://hxj0776.uta.cloud');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'DbConnect.php';

$objDB = new DbConnect;
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "SELECT * FROM trial";
        if (isset($_GET['role'])) {
            if ($_GET['role'] == "admin") {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                if (isset($_GET['email'])) {
                    $sql .= " WHERE email = :email";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $_GET['email']);
                    $stmt->execute();
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } else {
                    $sql .= " WHERE trial_id = :id";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':id', $_GET['id']);
                    $stmt->execute();
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                }
            }
        }else {
            $sql .= " WHERE trial_id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $_GET['id']);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO trial(trial_name, email, defendant_name, prosecutor_name, trial_expense, trial_status, verdict) VALUES (:trial_name, :email, :defendant_name, :prosecutor_name, :trial_expense, :trial_status, :verdict)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':trial_name', $user->trial_name);
        if ($user->role == "admin") {
            $stmt->bindParam(':email', $user->member_email);
        } else {
            $stmt->bindParam(':email', $user->email);
        }
        $stmt->bindParam(':defendant_name', $user->defendant_name);
        $stmt->bindParam(':prosecutor_name', $user->prosecutor_name);
        $stmt->bindParam(':trial_expense', $user->trial_expense);
        $stmt->bindParam(':trial_status', $user->trial_status);
        $stmt->bindParam(':verdict', $user->verdict);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record not created successfully.'];
        }
        break;
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE trial SET trial_name= :trial_name, defendant_name =:defendant_name, prosecutor_name =:prosecutor_name, trial_expense =:trial_expense, trial_status =:trial_status, verdict =:verdict WHERE trial_id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->trial_id);
        $stmt->bindParam(':trial_name', $user->trial_name);
        $stmt->bindParam(':defendant_name', $user->defendant_name);
        $stmt->bindParam(':prosecutor_name', $user->prosecutor_name);
        $stmt->bindParam(':trial_expense', $user->trial_expense);
        $stmt->bindParam(':trial_status', $user->trial_status);
        $stmt->bindParam(':verdict', $user->verdict);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM trial WHERE trial_id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
