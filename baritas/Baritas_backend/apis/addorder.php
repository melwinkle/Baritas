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

$order->date=$data->dat;
$order->pay=$data->payment;
$order->waiter= $data->wait;
$order->total_cost= $data->cost;
$order->stats=$data->status;
$order->restaurant = $data->rest;
$order->table = $data->table;
$order->dine = $data->type;
$order->user_id = $data->cashier;
$order->sub =$data->s;
$data->notes =$data->special_notes;

$order->create();

$list = $data->orderList;

foreach($list as $p){
    $items->order = $order->getId();
    $items->menu = $p->menu_id;
    $items->quant = $p->quantity;
    $items->amt = $p->amount;

    $items->create();
}


?>