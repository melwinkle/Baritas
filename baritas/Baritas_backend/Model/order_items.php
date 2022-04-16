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
        $stmt->bindParam(':m',$this->menu);
        $stmt->bindParam(':a',$this->price);  

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }

    public function getFood(){
        $query ="SELECT * from order_items inner join menu on menu.menu_id=order_items.menu_id where order_id=:r ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->id);
        $stmt->execute();
        return $stmt;

    }


    public function checkitem(){
        $query ="SELECT * from order_items where order_id=:r and menu_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->id);
        $stmt->bindParam(':i',$this->menu);
        $stmt->execute();
        if ($stmt->execute()) {
            return $stmt;
        }

    }

    public function updatequant(){
        $query ="UPDATE order_items SET quantity=:q where order_id=:r and menu_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->id);
        $stmt->bindParam(':i',$this->menu);
        $stmt->bindParam(':q',$this->quantity);
        if ($stmt->execute()) {
            return true;
        }
        else{
            return false;
        }


    }
}
?>