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


if($menu->updatekitchen()){


    echo '{"Update Order#"' .json_encode($menu->id).' }';
    return true;
}
else{
    echo false;
}

?>