<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Menu.php';

$database = new Database();
$db = $database->connect();

$menu = new menu($db);


$data = json_decode(file_get_contents("php://input"));

$menu->id = $data->id;
$menu->name=$data->name;
$menu->price=$data->price;
$menu->size= $data->size;
$menu->restaurant= $data->rest;
$menu->category = $data->catid;

if($menu->updatemenu()){
    echo true;
}
else{
    echo false;
}
?>