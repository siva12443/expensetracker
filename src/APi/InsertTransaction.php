<?php
// Database connection settings
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$database = "transactions_table"; // Change this to your database name

try {
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare SQL statement to insert data into the database
    $stmt = $conn->prepare("INSERT INTO `entry_table` (`transaction_type`, `category`, `amount`, `payment_method`, `description`) VALUES (:transaction_type, :category, :amount, :payment_method, :description)");

    // Bind parameters
    $stmt->bindParam(':transaction_type', $_POST['transaction_type']);
    $stmt->bindParam(':category', $_POST['category']);
    $stmt->bindParam(':amount', $_POST['amount']);
    $stmt->bindParam(':payment_method', $_POST['payment_method']);
    $stmt->bindParam(':description', $_POST['description']);

    // Execute the statement
    $stmt->execute();

    echo "Transaction data inserted successfully";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Close connection
$conn = null;
?>