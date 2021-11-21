<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Production.php';


$database = new Database();
$db = $database->connect();
$order = new production($db);


$result = $order->alertnum();

// Get row count
$num = $result->rowCount();

if ($num > 0) {
    // Cat array
 

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'alert_num'=>$total

        );

        // Push to "data"
      
    }

    // Turn to JSON & output
    echo '{"alert": ' .json_encode($cat_item).' }';

} else {
    // No Categories
    echo json_encode(
        array('message' => 'No inventory Found')
    );
}
?>