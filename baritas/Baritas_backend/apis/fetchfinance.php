<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();
$ord = new orders($db);

$result = $ord->ordertotal();
$num = $result->rowCount();

if ($num > 0) {

    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'oid'=>$order_id,
            'mid' => $menu_id,
            'date'=>$date,
            'pay'=>$payment_method,
            'wait'=>$waiter,
            'bill'=>$quantity * $price
        );
        array_push($cat_arr["data"], $cat_item);
    }
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No transactions Found')
    );
}

?>