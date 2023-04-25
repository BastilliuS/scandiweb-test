<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
class Book extends Product {
    private $book_weight;

    public function __construct($sku, $name, $price, $type, $book_weight) {
        parent::__construct($sku, $name, $price, $type);
        $this->book_weight = $book_weight;
    }

    public function getBookWeight() {
        return $this->book_weight;
    }

    public function setBookWeight($book_weight) {
        $this->book_weight = $book_weight;
    }

    public function getAttributes() {
        return $this->getBookWeight();
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
