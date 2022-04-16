<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';
include_once '../../Baritas_backend/Model/order_items.php';

$database = new Database();
$db = $database->connect();

$order = new orders($db);

$items= new order_items($db);
$data = json_decode(file_get_contents("php://input"));

$order->id = $_GET['id'];
$result= $order->oneitem();
$num = $result->rowCount();

if($num >0){
    $cat_arr =array();
    $cat_arr['data'] =array();
   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $vat=(2.5/100)*$total_cost;
       $cat_item = array(
        'id' => $order_id,
        'payment'=>$payment_method,
        'waiters'=>$waiter_name,
        'total'=>$total_cost,
        'status'=>$stats,
        'sub'=>$sub_total,
        'notes'=>$special_notes,
        'dine'=>$dine_type,
        'vat'=>$vat,
        'table'=>$table_id

    );

    $cat_item["list"]=array();
      
        $items->id=$order_id;
        $result1=$items->getFood();
    
        $num1=$result1->rowCount();
        
        while($row1=$result1->fetch(PDO::FETCH_ASSOC)){
   
            extract($row1);

   
    $cat_sing=array( 
        'id'=>$menu_id,
        'name'=>$name_of_food,
        'price'=>$amount,
    );

    array_push($cat_item["list"],$cat_sing);
  
        }
    array_push($cat_arr['data'],$cat_item);
   }
//    echo'{ "data": ' .json_encode($cat_item).'}';
echo json_encode($cat_arr);
}
else{
    echo json_encode(
        array('message' => 'order does not exist')
    );
}

?>