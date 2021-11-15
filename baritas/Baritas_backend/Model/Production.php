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
    public $limit;
    public $restaurant;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getId()
    {
        return $this->id;
        
    }
    public function create()
    {
        $query = "INSERT into production(product_name,in_stock,measurement,recipe,stock_limit) VALUES (:n,:i,:m,:r,:ins)";
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


    public function allnotice(){
        $query="SELECT * from production_alert where AlertStatus='0'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function allnoticer(){
        $query="SELECT * from production_alert where AlertStatus='1'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function alltransaction(){
<<<<<<< HEAD
        $query="SELECT * from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.production_id=product_transact_item.product_id";
=======
        $query="SELECT production_transaction.transaction_id,production_transaction.Date,production.product_name, restaurant.restaurant_name,product_transact_item.quantity, production_transaction.Transaction_Status from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.production_id=product_transact_item.product_id inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id";
>>>>>>> 3afc508fea4bfbda118045554a72fd73fe307768
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function alltransactions(){
<<<<<<< HEAD
        $query="SELECT * from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.production_id=product_transact_item.product_id where production_transaction.restaurant=:r";
=======
        $query="SELECT production_transaction.transaction_id,production_transaction.Date,production.product_name, restaurant.restaurant_name,product_transact_item.quantity, production_transaction.Transaction_Status from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.production_id=product_transact_item.product_id inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id where production_transaction.restaurant_id=:r";
>>>>>>> 3afc508fea4bfbda118045554a72fd73fe307768
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function oneitem(){
        $query="SELECT * from production where production_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }

    public function updateproduction(){
        $query="UPDATE production SET product_name=:pn , in_stock=:c , measurement=:m , recipe=:r , stock_limit=:m where production_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->name);
        $stmt->bindParam(':c',$this->in_stock);
        $stmt->bindParam(':m',$this->measurement);
        $stmt->bindParam(':r',$this->recipe);
        $stmt->bindParam(':m',$this->stock_limit);
   

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    
}
<<<<<<< HEAD

public function updatealert(){
    $query="UPDATE production_alert SET AlertStatus='1' where alert_id=:i";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':i',$this->id);




    if($stmt->execute()){
        return true;
    }
    printf("error: %s ./n", $stmt->error);
    return false;

}
=======
>>>>>>> 3afc508fea4bfbda118045554a72fd73fe307768
}
?>