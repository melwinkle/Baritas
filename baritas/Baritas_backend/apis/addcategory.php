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


$menu->name=$data->name;


$menu->img=$data->img;

$menu->restaurant_view=$data->restaurant;

if($menu->createcategory()){
   echo true;
}
else{
  echo false;
}
?>