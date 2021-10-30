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

$invent->id = $_GET['id'];
$invent->name=$data->name;
$invent->unit=$data->unit;
$invent->stock= $data->inn;
$invent->measure= $data->Measure;
$invent->instock_lim=$data->limit;

if($invent->updateinventory()){
    echo true;
}
else{
    echo false;
}