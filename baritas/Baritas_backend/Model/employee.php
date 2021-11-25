<?php
class employee
{
    private $conn;
    private $table = 'employee';


    public $id;
    public $firstname;
    public $lastname;
    public $user_role;
    public $password;
    public $restaurant;
    public $stats;
    public $username;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into user(Firstname, lastname, Pass,user_role,stats,username,Restaurant) VALUES (:n, :l,:p,:u,:s,:un,:r)";
        $stmt = $this->conn->prepare($query);

        
        $this->name = htmlspecialchars(strip_tags($this->firstname));
        $this->name = htmlspecialchars(strip_tags($this->lastname));
        $this->unit = htmlspecialchars(strip_tags($this->password));
        $this->stock = htmlspecialchars(strip_tags($this->user_role));
        $this->measure = htmlspecialchars(strip_tags($this->stats));
        $this->restaurant = htmlspecialchars(strip_tags($this->username));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



   
        $stmt->bindParam(':n', $this->firstname);
        $stmt->bindParam(':l', $this->lastname);
        $stmt->bindParam(':p', $this->password);
        $stmt->bindParam(':u', $this->user_role);
        $stmt->bindParam(':s', $this->stats);
        $stmt->bindParam(':un', $this->username);
        $stmt->bindParam(':r', $this->restaurant);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    
    public function allemployee(){
        $query="SELECT * from users where Restaurant=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }

    public function onemployee(){
        $query="SELECT * from users where user_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }

    public function terminate(){
        $query="UPDATE users SET stats='0' where user_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);

 


        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

   
}
?>