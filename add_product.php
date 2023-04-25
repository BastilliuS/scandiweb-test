<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');


require_once 'product.php';
require_once 'dvd.php';
require_once 'book.php';
require_once 'furniture.php';
require_once 'db.php';




$json = file_get_contents('php://input');
$data = json_decode($json);



$sku = $data->sku;
$name = $data->name;
$price = $data->price;
$type = $data->type;
$book_weight = $data->book_weight ?? null;
$dvd_size = $data->dvd_size ?? null;
$furniture_dimensions = $data->furniture_dimensions ?? null;




if ($type == 'DVD') {
    $product = new DVD($sku,$name,$price,$type,$dvd_size);
    
} elseif ($type == 'Book') {
    $product = new Book($sku,$name,$price,$type,$book_weight);
} elseif ($type == 'Furniture') {
    list($height, $width, $length) = explode('x', $furniture_dimensions);
    $product = new Furniture($sku,$name,$price,$type,$furniture_dimensions);
}


$product->save();




