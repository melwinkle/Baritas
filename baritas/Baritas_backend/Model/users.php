<?php
class users
{
    private $conn;
    private $table = 'users';


    public $id;
    public $firstname;
    public $lastname;
    public $password;
    public $role;
    public $status;
    public $username;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into users(Firstname, lastname, Pass,user_role ,stats,username) VALUES (:fname, :lname,:p,:us,:s,:ney)";
        $stmt = $this->conn->prepare($query);

        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->role = htmlspecialchars(strip_tags($this->role));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->username = htmlspecialchars(strip_tags($this->username));



        $stmt->bindParam(':fname', $this->firstname);
        $stmt->bindParam(':lname', $this->lastname);
        $stmt->bindParam(':p', $this->password);
        $stmt->bindParam(':us', $this->role);
        $stmt->bindParam(':s', $this->status);
        $stmt->bindParam(':ney', $this->username);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 
    public function login(){
        $query = "SELECT * FROM users where username=:u and Pass=:p";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':u', $this->username);
        $stmt->bindParam(':p', $this->password);

        $stmt->execute();
        return $stmt;
    }
    public function validateEmail(){
        $query = 'SELECT COUNT(*) as exist FROM '.$this->table.' where Email=:e';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':e', $this->email);
        $stmt->execute();
        return $stmt;
    }
    public function deleteCustomer(){
        $query = 'DELETE from customers where Id =:id';
        $stmt = $this->conn->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id',$this->id);

        if($stmt->execute()){
            return true;
        }else{
            printf('Error: %s. \n',$stmt->error);
            return false;
        }
    }
}
?>