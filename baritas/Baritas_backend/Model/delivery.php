<?php
class delivery{
    private $conn;
    private $table='category';


    public $id;
    public $order;
    public $customer_name;
    public $number;
    public $location;
    public $mode;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query ="INSERT into delivery(order_id,customer_name,customer_number,customer_location,delivery_mode) VALUES (:o,:c,:n,:l,:d)";
        $stmt = $this->conn->prepare($query);

        $this->order=htmlspecialchars(strip_tags($this->order));
        $this->customer_name=htmlspecialchars(strip_tags($this->customer_name));
        $this->number=htmlspecialchars(strip_tags($this->number));
        $this->location=htmlspecialchars(strip_tags($this->location));
        $this->mode=htmlspecialchars(strip_tags($this->mode));

        $stmt->bindParam(':o',$this->order);
        $stmt->bindParam(':c',$this->customer_name);
        $stmt->bindParam(':l',$this->location);
        $stmt->bindParam(':d',$this->mode);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }
}

?>