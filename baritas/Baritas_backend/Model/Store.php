<?php
class store
{
    private $conn;
    private $table = 'store';

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
        $query = "INSERT into store(product_name,in_stock,stock_limit) VALUES (:n,:i,:ins)";
        $stmt = $this->conn->prepare($query);

       
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->limit = htmlspecialchars(strip_tags($this->limit));
        $this->stock = htmlspecialchars(strip_tags($this->stock));
    



     
        $stmt->bindParam(':n', $this->name);
        $stmt->bindParam(':i', $this->stock);
        $stmt->bindParam(':ins', $this->limit);



    if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function allstore(){
        $query="SELECT * from store";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }


    public function allnotice(){
        $query="SELECT * from store_alert where AlertStatus='0'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function allnoticer(){
        $query="SELECT * from store_alert where AlertStatus='1'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function onetransaction(){
        $query="SELECT transaction_id,Date,restaurant_name from production_transaction inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id where production_transaction.transaction_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }
    public function onetransactions(){
        $query="SELECT production_trans_id,product_name,quantity from product_transact_item inner join production on production.production_id=product_transact_item.product_id where product_transact_item.transaction_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }
    public function alltransaction(){
        $query="SELECT production_transaction.transaction_id,production_transaction.Date,restaurant.restaurant_name, production_transaction.Transaction_Status from production_transaction inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function alltransactions(){
        $query="SELECT production_transaction.transaction_id,production_transaction.Date,production.product_name, restaurant.restaurant_name,product_transact_item.quantity, production_transaction.Transaction_Status from production_transaction inner join product_transact_item on product_transact_item.transaction_id=production_transaction.transaction_id inner join production on production.production_id=product_transact_item.product_id inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id where production_transaction.restaurant_id=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function alltransact(){
        $query="SELECT production_transaction.transaction_id,production_transaction.Transaction_Status,Date from production_transaction where Date=:d";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':d',$this->date);
        $stmt->execute();
        return $stmt;
    }

    public function allptransact(){
        $query="SELECT production_transaction.transaction_id,production_transaction.Transaction_Status,Date,restaurant_name from production_transaction inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id where Date=:d ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':d',$this->date);
        $stmt->execute();
        return $stmt;
    }

    public function alltransacts(){
        $query="SELECT transaction_id,Date,count(*) as total from production_transaction  inner join restaurant on restaurant.restaurant_id=production_transaction.restaurant_id where production_transaction.restaurant_id=:r group by Date";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }

    public function allptransacts(){
        $query="SELECT transaction_id,Date,count(*) as total from production_transaction group by Date";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function oneitem(){
        $query="SELECT * from store where store_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }
    public function alertnum(){
        $query="SELECT count(*) as total from store_alert where AlertStatus='0'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function updatestore(){
        $query="UPDATE store SET product_name=:pn , in_stock=:c, stock_limit=:s where store_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->product_name);
        $stmt->bindParam(':c',$this->in_stock);
        $stmt->bindParam(':s',$this->stock_limit);
   

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    
}

public function updatealert(){
    $query="UPDATE store_alert SET AlertStatus='1' where alert_id=:i";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':i',$this->id);




    if($stmt->execute()){
        return true;
    }
    printf("error: %s ./n", $stmt->error);
    return false;

}

public function updateinvoice(){
    $query="UPDATE production_transaction SET Transaction_Status='Completed' where transaction_id=:i";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':i',$this->id);




    if($stmt->execute()){
        return true;
    }
    printf("error: %s ./n", $stmt->error);
    return false;

}
public function updateprodt(){
    $query="UPDATE product_transact_item SET quantity=:q where production_trans_id=:i";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':q',$this->quantity);
    $stmt->bindParam(':i',$this->id);




    if($stmt->execute()){
        return true;
    }
    printf("error: %s ./n", $stmt->error);
    return false;

}
}
?>