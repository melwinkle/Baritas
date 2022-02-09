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
$items  = new order_items($db);

$data = json_decode(file_get_contents("php://input"));


$order->pay=$data->payment;
$order->waiter= $data->waiter;
$order->total_cost= $data->total;
$order->id = $data->id;
$order->dine = $data->dine;
$order->sub =$data->sub;
$order->bill =$data->id;
$order->notes =$data->notes;

if($order->updateorder()){
    echo true;
}
else{
    echo false;
}

$list = $data->list;

foreach($list as $p){
    $items->order = $data->id;
    $items->id = $p->id;
    $items->price = $p->price;

    $items->create();
}


?>