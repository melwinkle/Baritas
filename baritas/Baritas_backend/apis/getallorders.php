<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';


$database = new Database();
$db = $database->connect();
$order = new orders($db);
$order->restaurant= $_GET['id'];

$result = $order->allorders();

// Get row count
$num = $result->rowCount();

if ($num > 0) {
    // Cat array
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'id' => $order_id,
            'date'=>$date,
            'pay'=>$payment_method,
            'server'=>$waiter,
            'cost'=>$total_cost,
            'status'=>$stats
        );

        // Push to "data"
        array_push($cat_arr["data"], $cat_item);
    }

    // Turn to JSON & output
    echo json_encode($cat_arr);

} else {
    // No Categories
    echo json_encode(
        array('message' => 'No inventory Found')
    );
}
?>