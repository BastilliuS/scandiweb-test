<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
class Furniture extends Product {
    private $furniture_dimensions;

    public function __construct($sku, $name, $price, $type, $furniture_dimensions) {
        parent::__construct($sku, $name, $price, $type);
        $this->furniture_dimensions = $furniture_dimensions;
    }

    public function getFurnitureDimensions() {
        return $this->furniture_dimensions;
    }

    public function setFurnitureDimensions($furniture_dimensions) {
        $this->furniture_dimensions = $furniture_dimensions;
    }

    public function getAttributes() {
        return $this->getFurnitureDimensions();
    }
    public function save() {
        $conn = $this->connect();
        $query = "INSERT INTO products (Name, Price, SKU, TYPE, DVD_SIZE, BOOK_WEIGHT, FURNITURE_DIMENSIONS) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sssssss", $this->name, $this->price, $this->sku, $this->type, $this->dvd_size, $this->book_weight, $this->furniture_dimensions);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
}
