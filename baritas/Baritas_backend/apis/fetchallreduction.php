<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/inventory.php';

$database = new Database();
$db = $database->connect();
$ord = new inventory($db);

$ord->id = $_GET['id'];
$result = $ord->reduction();
$num = $result->rowCount();

if ($num > 0) {
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'date'=>$date,
            'total'=>$total,
            'id'=>$reduction_id
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