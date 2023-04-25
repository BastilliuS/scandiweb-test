<?php


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
$servername = "localhost";
$username = "id20512167_cristi";
$password = "Alex200!200!";
$dbname = "id20512167_products";




$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  
  $products = array();
  while($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
  }

  header('Content-Type: application/json');
  echo json_encode($products);
} else {
  echo "No products found";
}
mysqli_close($conn);
?>