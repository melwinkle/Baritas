<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Production.php';


$database = new Database();
$db = $database->connect();
$order = new production($db);

$result = $order->allnoticer();

// Get row count
$num = $result->rowCount();

if ($num > 0) {
    // Cat array
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'alert_id' => $alert_id,
            'AlertDate'=>$AlertDate,
            'AlertMessage'=>$AlertMessage,
            'AlertStatus'=>$AlertStatus
        );

        // Push to "data"
        array_push($cat_arr["data"], $cat_item);
    }

    // Turn to JSON & output
    echo json_encode($cat_arr);

} else {
    // No Categories
    echo json_encode(
        array('message' => 'No Notification Found')
    );
}
?>