<?php
class payment_mode{
    private $conn;
    private $table='payment_mode';

    
    public $id;
    public $mode;
    public $delivery;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query ="INSERT into payment_mode(mode,delivery) VALUES (:m,:d)";
        $stmt = $this->conn->prepare($query);

        $this->mode=htmlspecialchars(strip_tags($this->mode));
        $this->delivery=htmlspecialchars(strip_tags($this->delivery));

        $stmt->bindParam(':m',$this->mode);
        $stmt->bindParam(':d',$this->delivery);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }
}
?>