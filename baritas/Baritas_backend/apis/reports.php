<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db=$database->connect();
$order = new orders($db);

$data = json_decode(file_get_contents("php://input"));

$order->date = $data->startDate;
$order->date = $data->endDate;
$order->restaurant =$data->rest;
$order->dine = $data->dine_type;

$result = $order->getByCategories();

$num = $result->rowCount();

if($num>0){
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $cat_item =array(
            'food'=> $name_of_the_food,
            "quant"=>$quantity,
            "amt"=> $amount,
            "cat_id"=>$category_id
        );

        array_push($cat_arr["data"], $cat_item);
    }

    echo json_encode($cat_arr);
}else{
    echo json_encode(
        array("message" => "No transaction found")
    );
}

?>