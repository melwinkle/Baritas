<?php
class orders
{
    private $conn;
    public $id;
    public $date;
    public $pay;
    public $waiter;
    public $total_cost;
    public $stats;
    public $restaurant;

    public function __construct($db){
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into orders(`date`, payment_method,waiter,total_cost,stats,restaurant) VALUES (:d, :pm,:w,:tc,:s,:r)";
        $stmt = $this->conn->prepare($query);

        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->pay = htmlspecialchars(strip_tags($this->pay));
        $this->waiter = htmlspecialchars(strip_tags($this->waiter));
        $this->total_cost = htmlspecialchars(strip_tags($this->total_cost));
        $this->stats = htmlspecialchars(strip_tags($this->stats));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



        $stmt->bindParam(':d', $this->date);
        $stmt->bindParam(':pm', $this->pay);
        $stmt->bindParam(':w', $this->waiter);
        $stmt->bindParam(':tc', $this->total_cost);
        $stmt->bindParam(':s', $this->stats);
        $stmt->bindParam(':r', $this->restaurant);


        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    
    public function changestatus(){
        $query="UPDATE orders SET stats=:pn where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->stats);

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function allorders(){
        $query="SELECT * from orders where restaurant=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function oneitem(){
        $query="SELECT * from orders where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }
}
?>