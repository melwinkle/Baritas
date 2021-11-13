<?php
class category{
    private $conn;
    private $table='category';


    public $id;
    public $name;
    public $rest;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query ="INSERT into category(category_name,restaurant) VALUES (:n,:r)";
        $stmt = $this->conn->prepare($query);

        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->rest=htmlspecialchars(strip_tags($this->rest));

        $stmt->bindParam(':n',$this->name);
        $stmt->bindParam(':r',$this->rest);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;

    }
}

?>