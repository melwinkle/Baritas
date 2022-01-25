<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Store.php';

$database = new Database();
$db = $database->connect();

$product = new store($db);


$data = json_decode(file_get_contents("php://input"));

$product->name=$data->product;
$product->stock= $data->in_stock;

$product->limit=$data->limit;





if($product->create()){
    echo true;
    
}
else{
    echo false;
}
?> 