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
        $sql = "SELECT * FROM land";
        if (isset($_GET['role'])) {
            if ($_GET['role'] == "admin") {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                if (isset($_GET['email'])) {
                    $sql .= " WHERE email = :email";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $_GET['email']);
                    $stmt->execute();
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } else {
                    $sql .= " WHERE land_id = :id";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':id', $_GET['id']);
                    $stmt->execute();
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                }
            }
        } else {
            $sql .= " WHERE land_id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $_GET['id']);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO land(land_name, email, land_size, land_value) VALUES (:land_name, :email, :land_size, :land_value)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':land_name', $user->land_name);
        if ($user->role == "admin") {
            $stmt->bindParam(':email', $user->member_email);
        } else {
            $stmt->bindParam(':email', $user->email);
        }
        $stmt->bindParam(':land_size', $user->land_size);
        $stmt->bindParam(':land_value', $user->land_value);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record not created successfully.'];
        }
        break;
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE land SET land_name= :land_name, land_size =:land_size, land_value =:land_value WHERE land_id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->land_id);
        $stmt->bindParam(':land_name', $user->land_name);
        $stmt->bindParam(':land_size', $user->land_size);
        $stmt->bindParam(':land_value', $user->land_value);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM land WHERE land_id = :id";
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
