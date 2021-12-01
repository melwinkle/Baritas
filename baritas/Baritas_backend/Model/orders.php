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
        $query ="SELECT Date,sum(total_cost) as total, count(*) as count from orders where restaurant_id=:r GROUP BY Date";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function ordertotalG(){
        $query ="SELECT Date,sum(total_cost) as total, count(*) as count from orders GROUP BY Date";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;

    }


    public function orderbill(){
        $query ="SELECT order_id,waiter_name,total_cost,payment_method,stats from orders where Date=:d and restaurant_id=:i ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':d',$this->date);
        $stmt->bindParam(':i',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function ordertot(){
        $query ="SELECT Date,sum(total_cost), AS total from orders where restaurant_id=:r GROUP BY Date";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function orderpay(){
        $query ="SELECT payment_method,date, sum(total_cost) as total_cost FROM `orders` WHERE date=:d group by payment_method ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':d',$this->date);
        $stmt->execute();
        return $stmt;

    }
    public function oneorders(){
        $query ="SELECT item_id,name_of_food,quantity,amount,menu.category_id as category from order_items inner join  menu on menu.menu_id=order_items.menu_id inner join category on category.category_id=menu.category_id where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;

    }
    public function oneorder(){
        $query ="SELECT order_id,special_notes,payment_method,Date,restaurant_name,drink_stats,waiter_name,table_id,dine_type,total_cost,sub_total,(2.5/100*total_cost) as vat from orders inner join restaurant on restaurant.restaurant_id=orders.restaurant_id where order_id=:i ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;

    }
    public function kitchen(){
        $query ="SELECT item_id,name_of_food,quantity,menu.category_id as category from order_items inner join  menu on menu.menu_id=order_items.menu_id inner join category on category.category_id=menu.category_id where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;

    }
    public function kitchens(){
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r and food_stat='1'";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }

    public function cashier(){
        $query ="SELECT * from orders where restaurant_id=:r";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    
    public function kitchenc(){
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r and food_stats='1'  ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function bar(){
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r and drink_stats='1'";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    
    public function updatekitchen(){
        $query="UPDATE orders SET food_stats='1' where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
    
    
    
    
        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    
    }
    public function updatebar(){
        $query="UPDATE orders SET drink_stat='1' where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
    
    
    
    
        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    
    }
}
?>