<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    
    $ids = json_decode(file_get_contents('php://input'), true);

    
    $host = "localhost";
    $username = "id20512167_cristi";
    $password = "Alex200!200!";
    $dbname = "id20512167_products";
    $conn = mysqli_connect($host, $username, $password, $dbname);

   
    
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    
    $sql = "DELETE FROM products WHERE id IN (" . implode(",", $ids) . ")";

    
    if (mysqli_query($conn, $sql)) {
        $response = array(
            'status' => 'success',
            'message' => count($ids) . ' products deleted successfully.'
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error deleting products: ' . mysqli_error($conn)
        );
    }

    mysqli_close($conn);

    header('Content-Type: application/json');
    echo json_encode($response);

} else {
    http_response_code(405);
    header('Allow: POST');
    echo 'Method Not Allowed';
}
