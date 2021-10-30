<?php
class menu
{
    private $conn;
    private $table = 'Menu';


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
}
?>