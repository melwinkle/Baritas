<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/production_transaction.php';
include_once '../../Baritas_backend/Model/production_transaction_item.php';

$database = new Database();
$db = $database->connect();

$prod = new production_transaction($db);
$item = new production_transaction_item($db);


$data = json_decode(file_get_contents("php://input"));

$prod->restaurant=$data->branch;
$prod->date =$data->date;
$prod->createproductiontransaction();


$list = $data->list;
$i=0;
foreach($list as $p){
$item->transaction_id= $prod->getId();    
$item->product_id =$p->product;
$item->quantity=$p->quantity;

$item->create();
}
 

?>