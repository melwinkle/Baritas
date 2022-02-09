<?php
class order_items{
    private $conn;
    private $table='order_items';


    public $id;
    public $order;
    public $menu;
    public $quant;
    public $price;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query ="INSERT into order_items(order_id,menu_id,amount) VALUES (:o,:m,:a)";
        $stmt = $this->conn->prepare($query);

        $this->order=htmlspecialchars(strip_tags($this->order));
        $this->id=htmlspecialchars(strip_tags($this->id));
        $this->price=htmlspecialchars(strip_tags($this->price));

        $stmt->bindParam(':o',$this->order);
        $stmt->bindParam(':m',$this->id);
        $stmt->bindParam(':a',$this->price);  

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }
}
?>