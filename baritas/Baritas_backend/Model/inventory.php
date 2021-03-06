<?php
class inventory
{
    private $conn;
    private $table = 'inventory';


    public $id;
    public $name;
    public $unit;
    public $stock;
    public $measure;
    public $restaurant;
    public $instock_lim;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into inventory(product_name, Unit_price, in_stock,Measurement,restaurant_id,in_stock_limit) VALUES (:n, :up,:s,:m,:re,:ins)";
        $stmt = $this->conn->prepare($query);

        
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->unit = htmlspecialchars(strip_tags($this->unit));
        $this->stock = htmlspecialchars(strip_tags($this->stock));
        $this->measure = htmlspecialchars(strip_tags($this->measure));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));



   
        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':up', $this->unit);
        $stmt->bindParam(':s', $this->stock);
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
        $query="SELECT * from inventory where restaurant_id=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
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
        $query="UPDATE inventory SET product_name=:pn , Unit_price=:up , in_stock=:iw , Measurement=:m, in_stock_limit=:l where product_id=:i and restaurant_id=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->name);
        $stmt->bindParam(':up',$this->unit);
        $stmt->bindParam(':iw',$this->stock);
        $stmt->bindParam(':m',$this->measure);
        $stmt->bindParam(':l',$this->instock_lim);
        $stmt->bindParam(':r',$this->restaurant);


        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function searchinventory($keywords)
    {
        $query = "SELECT * from inventory where product_name LIKE ?";
        $stmt = $this->conn->prepare($query);
        
        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords ="%{$keywords}%";
        
        $stmt->bindParam(1,$keywords);
        $stmt->execute();
        return $stmt;
    }

    public function reduction()
    {
        $query = "SELECT reduction_id,date,reduction as total from inventory_reduction where inventory_id=:i group by date";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
      
 
        $stmt->execute();
        return $stmt;
    }
}
?>