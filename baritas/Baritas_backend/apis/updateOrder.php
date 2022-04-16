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
$orderitem = new order_items($db);

$data = json_decode(file_get_contents("php://input"));

$order->id = $data->id;
$order->total_cost = $data->total;
$order->sub = $data->sub;
$order->pay =$data->payment;
$order->notes =$data->notes;

$order->updateorder();

$list = $data->listnew;

foreach($list as $p){
    $orderitem->id = $data->id;
    $orderitem->menu = $p->id;
    $item=$orderitem->checkitem();
    // $num = $item->rowCount();
    $orderitem->order = $data->id;
        $orderitem->menu = $p->id;
        $orderitem->price =$p->price;
        $orderitem->create();
    // if($num>0){
    
    //     while ($row = $item->fetch(PDO::FETCH_ASSOC)){
    //         extract($row);
    //         $quant=$quantity+1; 
    //         $orderitem->quantity=$quant;
    //         $orderitem->updatequant();
    //     }
    
    // }else{
        
    // }
   

}



?>