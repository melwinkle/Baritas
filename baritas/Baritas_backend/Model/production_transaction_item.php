<?php
class production_transaction_item{
    private $conn;

    public $production_trans_id;
    public $product_id;
    public $quantity;
    public $transaction_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function create(){
        $query = "INSERT into product_transact_item(product_id,quantity,transaction_id) VALUES (:p,:q,:t)";
        $stmt = $this->conn->prepare($query);

    
        // $this->product_id = htmlspecialchars(strip_tags($this->product_id));
        // $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        // $this->transaction_id= htmlspecialchars(strip_tags($this->transaction_id));
    
        $stmt->bindParam(':p', $this->product_id);
        $stmt->bindParam(':q', $this->quantity);
        $stmt->bindParam(':t', $this->transaction_id);
        if ($stmt->execute()) {

            return true; 
        }
        printf("Error: %s.\n", $stmt->error);
    
        return false;
    }

    
    
}