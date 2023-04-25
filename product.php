<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

class Product {

    protected $db_host = 'localhost';
    protected $db_user = 'id20512167_cristi';
    protected $db_pass = 'Alex200!200!';
    protected $db_name = 'id20512167_products';
  
    protected function connect() {
      $conn = new mysqli($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      return $conn;
    }

    public $sku;
    public $name;
    public $price;
    public $type;
    public $conn;
    
    
    

    public function __construct($sku, $name, $price, $type) {
        
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
    }

    public function getSku() {
        return $this->sku;
    }

    public function setSku($sku) {
        $this->sku = $sku;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getPrice() {
        return $this->price;
    }

    public function setPrice($price) {
        $this->price = $price;
    }

    public function getType() {
        return $this->type;
    }

    public function setType($type) {
        $this->type = $type;
    }
    
    

}

