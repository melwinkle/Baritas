<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();

$order = new orders($db);


$data = json_decode(file_get_contents("php://input"));

$order->id = $_GET['id'];
$result= $order->oneitem();
$num = $result->rowCount();

if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $cat_item = array(
        'id' => $order_id,
        'date'=>$date,
        'pay'=>$payment_method,
        'server'=>$waiter,
        'cost'=>$total_cost,
        'status'=>$status
    );
   }
   echo '{"order": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'order does not exist')
    );
}

?>