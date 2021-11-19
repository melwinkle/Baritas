<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Production.php';

$database = new Database();
$db = $database->connect();
$invent = new production($db);

$invent->restaurant =$_GET['id'];
$result = $invent->alltransacts();
$num = $result->rowCount();

if ($num > 0) {

    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'transaction_id' => $transaction_id,
            'date'=>$Date,
            'total'=>$total
         
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