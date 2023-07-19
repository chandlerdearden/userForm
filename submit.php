<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to the database

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fictionaldb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$firstName = trim($_POST['firstName']);
$lastName = trim($_POST['lastName']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);

// Prepare and bind the statement
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $firstName, $lastName, $email, $phone);

// Execute the statement
if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

