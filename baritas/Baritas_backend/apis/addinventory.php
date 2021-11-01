<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/inventory.php';

$database = new Database();
$db = $database->connect();

$invent = new inventory($db);


$data = json_decode(file_get_contents("php://input"));

$invent->name=$data->product;
$invent->unit=$data->unitcost;
$invent->stock= $data->in_stock;
$invent->measure= $data->unitmeasure;
$invent->category=$data->category;
$invent->img=$data->image;
$invent->restaurant=$data->rest;
$invent->instock_lim=$data->limit;

if($invent->create()){
    echo json_encode(
        array('message' => 'No inventory Found')
    );
}
else{
    echo json_encode(
        array('message' => ' inventory Found')
    );
}
?>