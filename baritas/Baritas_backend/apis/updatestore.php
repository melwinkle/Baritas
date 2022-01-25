<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Store.php';

$database = new Database();
$db = $database->connect();

$invent = new store($db);


$data = json_decode(file_get_contents("php://input"));

$invent->id = $data->store_id;
$invent->product_name=$data->product_name;
$invent->in_stock= $data->in_stock;
$invent->stock_limit = $data->stock_limit;

if($invent->updatestore()){
    echo true;
}
else{
    echo false;
}
?>