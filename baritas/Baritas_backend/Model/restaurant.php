<?php
class restaurant
{
    private $conn;
    private $table = 'restaurant';


    public $id;
    public $name;
    public $token;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into restaurant(restaurant_name,res_token) VALUES (:n,:c)";
        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->token = htmlspecialchars(strip_tags($this->token));




        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':c', $this->token);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 


    public function getallrestaurants(){
        $query="SELECT * from restaurant";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>