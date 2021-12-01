<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/inventory.php';

$database = new Database();
$db = $database->connect();
$invent = new inventory($db);

$invent->restaurant =$_GET['id'];
$result = $invent->allinventory();
$num = $result->rowCount();

if ($num > 0) {

    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'id' => $product_id,
            'name'=>$product_name,
            'unit'=>$Unit_price,
            'in'=>$in_stock,
            'Measure' => $Measurement,
            'rest'=>$restaurant_id,
            'limit'=>$in_stock_limit
        );
        array_push($cat_arr["data"], $cat_item);
    }
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No inventory Found')
    );
}

?>