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
    public $sdate;
    public $edate;

    public function __construct($db){
        $this->conn = $db;
      
    }


    public function last(){
        $this->id = $this->conn->lastInsertId();
        return $this->id;
    }
    public function createnew()
    {
        $query = "INSERT into orders(restaurant_id,user_id,table_id) VALUES (:r,:u,:t)";
        $stmt = $this->conn->prepare($query);

  
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));
        $this->cashier = htmlspecialchars(strip_tags($this->cashier));
        $this->table = htmlspecialchars(strip_tags($this->table));
 




        $stmt->bindParam(':r', $this->restaurant);
        $stmt->bindParam(':u', $this->cashier);
        $stmt->bindParam(':t', $this->table);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            echo $this->id;
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    public function updateorder()
    {
        $query="UPDATE orders SET bill_no=:i, payment_method=:pm,waiter_name=:w,total_cost=:tc,dine_type=:di,sub_total=:su,special_notes=:sn where order_id=:i";
        $stmt = $this->conn->prepare($query);

  
        // $this->bill = htmlspecialchars(strip_tags($this->bill));
        // $this->pay = htmlspecialchars(strip_tags($this->pay));
        // $this->waiter = htmlspecialchars(strip_tags($this->waiter));
        // $this->total_cost = htmlspecialchars(strip_tags($this->total_cost));
        // $this->stats = htmlspecialchars(strip_tags($this->stats));
        // $this->table = htmlspecialchars(strip_tags($this->table));
        // $this->dine = htmlspecialchars(strip_tags($this->dine));
        // $this->sub = htmlspecialchars(strip_tags($this->sub));
        // $this->notes = htmlspecialchars(strip_tags($this->notes));


        $stmt->bindParam(':i', $this->id);
        $stmt->bindParam(':b', $this->bill);
        $stmt->bindParam(':pm', $this->pay);
        $stmt->bindParam(':w', $this->waiter);
        $stmt->bindParam(':tc', $this->total_cost);
        $stmt->bindParam(':di', $this->dine);
        $stmt->bindParam(':su', $this->sub);
        $stmt->bindParam(':sn', $this->notes);


        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            $_SESSION['order_id']=$this->id;
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function createtable()
    {
        $query = "INSERT into tablemap(table_name,restaurant_id) VALUES (:u,:r)";
        $stmt = $this->conn->prepare($query);

  
        $this->restaurant = htmlspecialchars(strip_tags($this->restaurant));
        $this->name = htmlspecialchars(strip_tags($this->name));
 




        $stmt->bindParam(':r', $this->restaurant);
        $stmt->bindParam(':u', $this->name);



        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            echo $this->id.",";
            return true;
        }
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    public function getId(){
        return $this->id;
    }
    
    public function changestatus(){
        $query="UPDATE orders SET stats='Completed' where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
   

        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    }


    public function changestatusc(){
        $query="UPDATE orders SET stats='Cancelled' where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
   

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
        $query ="SELECT item_id,name_of_food,(quantity*price) as fprice,quantity,menu.category_id as category from order_items inner join  menu on menu.menu_id=order_items.menu_id inner join category on category.category_id=menu.category_id where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->execute();
        return $stmt;

    }
    public function kitchens(){
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r";
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
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }
    public function bar(){
        $query ="SELECT order_id,special_notes,drink_stats,stats,drink_stat,food_stats,food_stat from orders where restaurant_id=:r ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }

    public function getTable(){
        $query ="SELECT * from tablemap where restaurant_id=:r ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':r',$this->restaurant);
        $stmt->execute();
        return $stmt;

    }

    public function updatemap(){
        $query="UPDATE tablemap SET x_cod=:x, y_cod=:y where map_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':i',$this->id);
        $stmt->bindParam(':x',$this->x);
        $stmt->bindParam(':y',$this->y);
    
    
    
    
        if($stmt->execute()){
            return true;
        }
        printf("error: %s ./n", $stmt->error);
        return false;
    
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

    public function getByCategories(){
        $query = "SELECT c.category_name, m.name_of_food, i.quantity,i.amount,c.category_id from orders o inner join order_items i on o.order_id = i.order_id inner join menu m on m.menu_id = i.menu_id inner join category c on c.category_id = m.category_id where (o.date BETWEEN :startd and :endd ) and o.restaurant_id = :r and o.dine_type = :d;";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":startd",$this->sdate);
        $stmt->bindParam(":endd",$this->edate);
        $stmt->bindParam(":r",$this->restaurant);
        $stmt->bindParam(":d",$this->dine);

        $stmt->execute();
        return $stmt;

    }

    public function checkitem(){
        $query ="UPDATE orders SET sub_total=:s, total_cost=:t , payment_method=:p , speical_notes=:sn where order_id=:i";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":t",$this->total_cost);
        $stmt->bindParam(":s",$this->sub);
        $stmt->bindParam(":p",$this->pay);
        $stmt->bindParam(":sn",$this->notes);

        $stmt->execute();
        return $stmt;
    }

    
}
?>