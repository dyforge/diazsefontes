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
        $sql = "SELECT * FROM familygroup";
        if (isset($_GET['role'])) {
            if ($_GET['role'] == "admin") {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                if (isset($_GET['email'])) {
                    $sql .= " WHERE ancestor_id = :email";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $_GET['email']);
                    $stmt->execute();
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } else {
                    $sql .= " WHERE family_grp_num = :id";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':id', $_GET['id']);
                    $stmt->execute();
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                }
            }
        }else {
            $sql .= " WHERE family_grp_num = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $_GET['id']);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO familygroup(ancestor_id, fy_firstName, fy_lastName, fy_email) VALUES (:ancestor_id, :fy_firstName, :fy_lastName, :fy_email)";
        $stmt = $conn->prepare($sql);
        if ($user->role == "admin") {
            $stmt->bindParam(':ancestor_id', $user->ancestor_id);
        } else {
            $stmt->bindParam(':ancestor_id', $user->email);
        }
        $stmt->bindParam(':fy_firstName', $user->fy_firstName);
        $stmt->bindParam(':fy_lastName', $user->fy_lastName);
        $stmt->bindParam(':fy_email', $user->fy_email);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record not created successfully.'];
        }
        break;
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE familygroup SET fy_firstName= :fy_firstName, fy_lastName =:fy_lastName, fy_email =:fy_email WHERE family_grp_num = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->family_grp_num);
        $stmt->bindParam(':fy_firstName', $user->fy_firstName);
        $stmt->bindParam(':fy_lastName', $user->fy_lastName);
        $stmt->bindParam(':fy_email', $user->fy_email);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM familygroup WHERE family_grp_num = :id";
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
