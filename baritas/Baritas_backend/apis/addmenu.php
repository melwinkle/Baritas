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
$menu->category= $data->category;
$menu->price= $data->price;
$menu->img=$data->img;
$menu->size=$data->size;
<<<<<<< HEAD
$menu->restaurant_view=$data->restaurant;
=======
$menu->restaurant=$data->restaurant;
>>>>>>> 1c51eaad0a6f0dd15b777d331d459daedc49708f

if($menu->create()){
   echo true;
}
else{
  echo false;
}
?>