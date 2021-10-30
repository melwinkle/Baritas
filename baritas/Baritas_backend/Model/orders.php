<?php
class orders
{
    private $conn;
    private $table = 'orders';


    public $id;
    public $date;
    public $pay;
    public $waiter;
    public $total_cost;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into orders(`date`, payment_method,waiter,total_cost) VALUES (:d, :pm,:w,:tc)";
        $stmt = $this->conn->prepare($query);

        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->pay = htmlspecialchars(strip_tags($this->pay));
        $this->waiter = htmlspecialchars(strip_tags($this->waiter));
        $this->total_cost = htmlspecialchars(strip_tags($this->total_cost));


        $stmt->bindParam(':d', $this->date);
        $stmt->bindParam(':pm', $this->pay);
        $stmt->bindParam(':w', $this->waiter);
        $stmt->bindParam(':tc', $this->total_cost);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 
}
?>