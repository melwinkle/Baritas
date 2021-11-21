<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Production.php';

$database = new Database();
$db = $database->connect();

$invent = new production($db);


$data = json_decode(file_get_contents("php://input"));

$invent->id = $data->production_id;
$invent->product_name=$data->production_name;
$invent->in_stock= $data->in_stock;
$invent->measurement= $data->measurement;
$invent->recipe=$data->recipe;
$invent->stock_limit = $data->stock_limit;

if($invent->updateproduction()){
    echo true;
}
else{
    echo false;
}
?>