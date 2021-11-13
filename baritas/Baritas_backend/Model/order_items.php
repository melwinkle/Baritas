<?php
class order_items{
    private $conn;
    private $table='order_items';


    public $id;
    public $order;
    public $menu;
    public $quant;
    public $amt;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query ="INSERT into order_items(order_id,menu_id,quantity,amount) VALUES (:o,:m,:q,:a)";
        $stmt = $this->conn->prepare($query);

        $this->order=htmlspecialchars(strip_tags($this->order));
        $this->menu=htmlspecialchars(strip_tags($this->menu));
        $this->quant=htmlspecialchars(strip_tags($this->quant));
        $this->amt=htmlspecialchars(strip_tags($this->amt));

        $stmt->bindParam(':o',$this->order);
        $stmt->bindParam(':m',$this->menu);
        $stmt->bindParam(':q',$this->quant);
        $stmt->bindParam(':a',$this->amt);  

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }
}
?>