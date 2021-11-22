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
    public $restaurant_view;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into Menu(name_of_food,category_id,price,img,size,restaurant_view) VALUES (:n,:c,:p,:i,:s,:r)";
        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->size = htmlspecialchars(strip_tags($this->size));
        $this->restaurant_view = htmlspecialchars(strip_tags($this->restaurant_view));



        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':c', $this->category);
        $stmt->bindParam(':p', $this->price);
        $stmt->bindParam(':i', $this->img);
        $stmt->bindParam(':s', $this->size);
        $stmt->bindParam(':r', $this->restaurant_view);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 


    public function createcategory()
    {
        $query = "INSERT into category(category_name,img,restaurant_view) VALUES (:c,:i,:r)";
        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->restaurant_view = htmlspecialchars(strip_tags($this->restaurant_view));




        $stmt->bindParam(':c', $this->name);
        $stmt->bindParam(':i', $this->img);
        $stmt->bindParam(':r', $this->restaurant_view);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    } 
    public function allmenu(){
        $query="SELECT * from Menu inner join category on Menu.category_id = category.category_id where Menu.restaurant_view=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }

    public function oneitem(){
        $query="SELECT * from menu inner join category on menu.category_id = category.category_id where menu.menu_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }

    public function onecategory(){
        $query="SELECT * from category  where category_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }
    public function updatemenu(){
        $query="UPDATE Menu SET name_of_food=:pn , price=:up, size=:s where menu_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->name);
        // $stmt->bindParam(':c',$this->category);
        $stmt->bindParam(':up',$this->price);
        // $stmt->bindParam(':r',$this->restaurant);
        $stmt->bindParam(':s',$this->size);
  

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function updatecategory(){
        $query="UPDATE category SET category_name=:n , restaurant_view=:r where category_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':n',$this->name);

        $stmt->bindParam(':r',$this->restaurant);
        
  

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function allcategory(){
        $query ="SELECT * from category where restaurant_view=:i or restaurant_view=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->restaurant);
        $stmt->bindParam(':r',$this->restaurant_v);

        $stmt->execute();
        return $stmt;
    }
    public function allcategoryv(){
        $query ="SELECT * from category where restaurant_view=:i ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->restaurant);

        $stmt->execute();
        return $stmt;
    }
}
?>