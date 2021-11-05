<?php
class menu
{
    private $conn;
    public $id;
    public $name;
    public $category;
    public $price;
    public $img;
    public $size;
    public $restaurant;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into Menu(name_of_food, category, price,img,size,restaurant) VALUES (:n, :c,:p,:i,:s,:r)";
        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->size = htmlspecialchars(strip_tags($this->size));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':c', $this->category);
        $stmt->bindParam(':p', $this->price);
        $stmt->bindParam(':i', $this->img);
        $stmt->bindParam(':s', $this->size);
        $stmt->bindParam(':r', $this->restaurant);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 


    public function allmenu(){
        $query="SELECT * from Menu where restaurant=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function updatemenu(){
        $query="UPDATE Menu SET name_of_the_food=:pn , category=:c , price=:up , img=:iw where menu_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->name);
        $stmt->bindParam(':c',$this->category);
        $stmt->bindParam(':up',$this->price);
        $stmt->bindParam(':iw',$this->img);

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function getallmenuitems(){
        $query ="SELECT * from menu where restaurant=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->restaurant);

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }
}
?>