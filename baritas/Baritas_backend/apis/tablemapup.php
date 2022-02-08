<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();

$menu = new orders($db);


$data = json_decode(file_get_contents("php://input"));

$menu->id = $_GET['id'];
$menu->x = $_GET['x'];
$menu->y = $_GET['y'];

if($menu->updatemap()){
    echo true;
}
else{
    echo false;
}

?>