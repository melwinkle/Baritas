<?php
class production_transaction
{


    private $conn;
    private $table='production_transaction';

    public $transaction_id;
    public $date;
    public $restaurant;
    public $status;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getId()
    {
        return $this->transaction_id;
        
    }

    public function createproductiontransaction()
    {
        $query = "INSERT into production_transaction(date,restaurant_id) VALUES (:d,:r)";
        $stmt = $this->conn->prepare($query);

        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));
        $this->date = htmlspecialchars(strip_tags($this->date));

        $stmt->bindParam(':r', $this->restaurant);
        $stmt->bindParam(':d', $this->date);
    
        if ($stmt->execute()) {
            $this->transaction_id = $this->conn->lastInsertId();
            return true; 
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }


}



   ?>

