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
        $query = "INSERT into users(Firstname, lastname, Pass,user_role,username,Restaurant) VALUES (:n, :l,:p,:u,:un,:r)";
        $stmt = $this->conn->prepare($query);

        
        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->unit = htmlspecialchars(strip_tags($this->password));
        $this->user_role = htmlspecialchars(strip_tags($this->user_role));
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



   
        $stmt->bindParam(':n', $this->firstname);
        $stmt->bindParam(':l', $this->lastname);
        $stmt->bindParam(':p', $this->password);
        $stmt->bindParam(':u', $this->user_role);
        $stmt->bindParam(':un', $this->username);
        $stmt->bindParam(':r', $this->restaurant);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function createwaiter()
    {
        $query = "INSERT into waiters(waiter_name,restaurant_id) VALUES (:n,:r)";
        $stmt = $this->conn->prepare($query);

        
        $this->waiter_name = htmlspecialchars(strip_tags($this->waiter_name));
        $this->restaurant_id = htmlspecialchars(strip_tags($this->restaurant_id));



   
        $stmt->bindParam(':n', $this->waiter_name);
        $stmt->bindParam(':r', $this->restaurant_id);



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


    public function allwaiters(){
        $query="SELECT * from waiters where restaurant_id=:r";
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

    public function onewaiter(){
        $query="SELECT * from waiters where waiter_id=:i";
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
    public function terminatew(){
        $query="UPDATE waiters SET stats='0' where waiter_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);

 


        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }
    public function updateemployee(){
        $query="UPDATE users SET Firstname=:f,lastname=:l,username=:u,user_role=:r,Pass=:p where user_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':f', $this->firstname);
        $stmt->bindParam(':l', $this->lastname);
        $stmt->bindParam(':p', $this->password);
        $stmt->bindParam(':r', $this->user_role);
        $stmt->bindParam(':u', $this->username);

 


        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function updatewaiter(){
        $query="UPDATE waiters SET waiter_name=:f,stats=:s where waiter_id=:i"; 
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':f', $this->waiter_name);
        $stmt->bindParam(':s', $this->stats);

 


        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

   
}
?>