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
    
    public function createalert()
    {
        $query = "INSERT into production_alert(AlertDate,AlertMessage) VALUES (:d,:m)";
        $stmt = $this->conn->prepare($query);

       
        $this->alert_date = htmlspecialchars(strip_tags($this->alert_date));
        $this->alert_message = htmlspecialchars(strip_tags($this->alert_message));
       



     
        $stmt->bindParam(':d', $this->alert_date);
        $stmt->bindParam(':m', $this->alert_message);
    
        



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }


    public function createinvoice()
    {
        $query = "INSERT into production_transaction(Date,restaurant_id,quantity) VALUES (:d,:r,:q)";
        $stmt = $this->conn->prepare($query);

       
        $this->transaction_date = htmlspecialchars(strip_tags($this->transaction_date));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));



     
        $stmt->bindParam(':d', $this->transaction_date);
        $stmt->bindParam(':r', $this->restaurant);
        $stmt->bindParam(':q', $this->quantity);
    
        



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            $query_1 = "INSERT into production_transaction(product_id,quantity,transaction_id) VALUES (:p,:q,:t)";
            $stmt_1 = $this->conn->prepare($query_1);

        
            $this->product_id = htmlspecialchars(strip_tags($this->product_id));
            $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        
            $this->id= htmlspecialchars(strip_tags($this->id));



        
            $stmt_1->bindParam(':p', $this->product_id);
            $stmt_1->bindParam(':q', $this->quantity);
            $stmt_1->bindParam(':t', $this->id);


            if($stmt_1->execute()){
                return true;
            }

            
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

public function updatealert(){
    $query="UPDATE production_alert SET AlertStatus=:s where alert_id=:i";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':i',$this->id);
    $stmt->bindParam(':s',$this->alert_status);



    if($stmt->execute()){
        return true;
    }
    printf("error: %s ./n", $stmt->error);
    return false;

}
}
?>