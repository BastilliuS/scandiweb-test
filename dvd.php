<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
class DVD extends Product {
    private $dvd_size;

    public function __construct($sku, $name, $price, $type, $dvd_size) {
        parent::__construct($sku, $name, $price, $type);
        $this->dvd_size = $dvd_size;
    }

    public function getDvdSize() {
        return $this->dvd_size;
    }

    public function setDvdSize($dvd_size) {
        $this->dvd_size = $dvd_size;
    }

    public function getAttributes() {
        return $this->getDvdSize();
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
