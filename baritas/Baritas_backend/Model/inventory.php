<?php
class inventory
{
    private $conn;
    private $table = 'inventory';


    public $id;
    public $category;
    public $name;
    public $unit;
    public $stock;
    public $img;
    public $measure;
    public $restaurant;
    public $instock_lim;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into inventory(product_name,category, Unit_price, in_stock,img,Measurement,restaurant,in_stock_limit) VALUES (:n,:c, :up,:s,:i,:m,:re,:ins)";
        $stmt = $this->conn->prepare($query);

        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->unit = htmlspecialchars(strip_tags($this->unit));
        $this->stock = htmlspecialchars(strip_tags($this->stock));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->measure = htmlspecialchars(strip_tags($this->measure));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



        $stmt->bindParam(':c', $this->category);
        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':up', $this->unit);
        $stmt->bindParam(':s', $this->stock);
        $stmt->bindParam(':i', $this->img);
        $stmt->bindParam(':m', $this->measure);
        $stmt->bindParam(':re', $this->restaurant);
        $stmt->bindParam(':ins', $this->instock_lim);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    
    public function allinventory(){
        $query="SELECT * from inventory";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function oneitem(){
        $query="SELECT * from inventory where product_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }

    public function updateinventory(){
        $query="UPDATE inventory SET product_name=:pn , category=:c , Unit_price=:up , in_stock=:iw , Measurement=:m, in_stock_limit=:l where product_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->name);
        $stmt->bindParam(':c',$this->category);
        $stmt->bindParam(':up',$this->unit);
        $stmt->bindParam(':iw',$this->stock);
        $stmt->bindParam(':m',$this->measure);
        $stmt->bindParam(':l',$this->instock_lim);

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }
}
?>