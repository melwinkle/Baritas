<?php
class orders
{
    private $conn;
    public $id;
    public $bill;
    public $date;
    public $pay;
    public $waiter;
    public $total_cost;
    public $stats;
    public $restaurant;
    public $table;
    public $dine;
    public $user_id;
    public $sub;
    public $notes;

    public function __construct($db){
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT into orders(`date`, payment_method,waiter_name,total_cost,stats,restaurant_id,table_id,dine_type,`user_id`,sub_total,special_notes) VALUES (:d,:pm,:w,:tc,:s,:r,:t,:di,:u,:su,:sn)";
        $stmt = $this->conn->prepare($query);

        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->pay = htmlspecialchars(strip_tags($this->pay));
        $this->waiter = htmlspecialchars(strip_tags($this->waiter));
        $this->total_cost = htmlspecialchars(strip_tags($this->total_cost));
        $this->stats = htmlspecialchars(strip_tags($this->stats));
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));
        $this->table = htmlspecialchars(strip_tags($this->table));
        $this->dine = htmlspecialchars(strip_tags($this->dine));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->sub = htmlspecialchars(strip_tags($this->sub));
        $this->notes = htmlspecialchars(strip_tags($this->notes));


        $stmt->bindParam(':d', $this->date);
        $stmt->bindParam(':pm', $this->pay);
        $stmt->bindParam(':w', $this->waiter);
        $stmt->bindParam(':tc', $this->total_cost);
        $stmt->bindParam(':s', $this->stats);
        $stmt->bindParam(':r', $this->restaurant);
        $stmt->bindParam(':t', $this->table);
        $stmt->bindParam(':di', $this->dine);
        $stmt->bindParam(':u', $this->user_id);
        $stmt->bindParam(':su', $this->sub);
        $stmt->bindParam(':sn', $this->notes);


        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function getId(){
        return $this->id;
    }
    
    public function changestatus(){
        $query="UPDATE orders SET stats=:pn where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':pn',$this->stats);

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }

    public function allorders(){
        $query="SELECT * from orders where restaurant_id =:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;
    }
    public function oneitem(){
        $query="SELECT * from orders where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;
    }

    public function ordertotal(){
        $query ="SELECT `date`,sum(total_cost) AS total from orders where restaurant_id=:r GROUP BY `date`";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function orderpay(){
        $query ="SELECT payment_method, total_cost FROM `orders` WHERE date=:d";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':d',$this->date);
        $stmt->execute();
        return $stmt;

    }
    public function kitchen(){
        $query ="SELECT name_of_food,quantity,menu.category_id as category from order_items inner join  menu on menu.menu_id=order_items.menu_id inner join category on category.category_id=menu.category_id where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;

    }
    public function kitchens(){
        $query ="SELECT order_id,special_notes,drink_stats from orders where restaurant_id=:r and stats='pending'";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function kitchenc(){
        $query ="SELECT order_id,special_notes,drink_stats from orders where restaurant_id=:r and stats='completed'";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
}
?>