<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();
$invent = new orders($db);

$invent->id =$_GET['id'];
$result = $invent->oneorder();
$num = $result->rowCount();

if ($num > 0) {

  
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item=array(
         'order_id' => $order_id,
            'special_notes'=>$special_notes,
            'total'=>$total_cost,
            'sub'=>$sub_total,
            'vat'=>$vat,
            'date'=>$Date,
            'table'=>$table_id,
            'dine'=>$dine_type,
            'restaurant'=>$restaurant_name,
            'cashier'=>$waiter_name,
            'pay'=>$payment_method     
        );
        $cat_item["order"]=array();
        $invent->id=$order_id;
        $result1=$invent->oneorders();
    
        $num1=$result1->rowCount();
        
        while($row1=$result1->fetch(PDO::FETCH_ASSOC)){
   
            extract($row1);


    $cat_sing=array( 
        'item_id'=>$item_id,
        'name_of_food'=>$name_of_food,
        'quantity'=>$quantity,
        'amount'=>$quantity,
    );

    array_push($cat_item["order"],$cat_sing);
   
    
       
        }
    

        array_push($cat_arr['data'],$cat_item);
   
       
    }
  
   
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No orders Found')
    );
}

?>