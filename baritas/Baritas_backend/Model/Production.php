<?php
class production
{
    private $conn;
    private $table = 'production';

    public $id;
    public $name;
    public $unit;
    public $stock;
    public $measure;
    public $restaurant;
    public $limit;
    public $recipe;
    public $alert_id;
    public $alert_date;
    public $alert_message;
    public $alert_status;
    public $quantity;
    public $transaction_date;
    public $total;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into production(product_name,in_stock,measurement,recipe,stock_limit) VALUES (:n,:i,:m,:s,:r,:ins)";
        $stmt = $this->conn->prepare($query);

       
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->limit = htmlspecialchars(strip_tags($this->limit));
        $this->stock = htmlspecialchars(strip_tags($this->stock));
        $this->measure = htmlspecialchars(strip_tags($this->measure));
        $this->recipe = htmlspecialchars(strip_tags($this->recipe));



     
        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':i', $this->stock);
        $stmt->bindParam(':m', $this->measure);
        $stmt->bindParam(':r', $this->recipe);
        $stmt->bindParam(':ins', $this->limit);
        



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    
    public function allproduction(){
        $query="SELECT * from production";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }


    public function alltransaction(){
        $query="SELECT * from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.product_id=product_transact_item";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function alltransactions(){
        $query="SELECT * from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.product_id=product_transact_item where production_transaction.restaurant=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function oneitem(){
        $query="SELECT * from production where product_id=:i";
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