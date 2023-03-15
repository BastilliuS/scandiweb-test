<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "alex2001";
$dbname = "products";
$conn = new mysqli($servername, $username, $password, $dbname);

// Query the database and output the results as JSON
$sql = "SELECT * FROM products";
$result = $conn->query($sql);
$rows = array();
while($row = $result->fetch_assoc()) {
  $rows[] = $row;
}
echo json_encode($rows);
?>
