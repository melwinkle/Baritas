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

$order->date=$data->d;
$order->pay=$data->pa;
$order->waiter= $data->wait;
$order->total_cost= $data->cost;
$order->stats=$data->stat;

if($order->create()){
   echo true;
}
else{
    echo false;