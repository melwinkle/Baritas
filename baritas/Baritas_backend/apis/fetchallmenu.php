<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Menu.php';

$database = new Database();
$db = $database->connect();
$invent = new menu($db);
$invent->restaurant = $_GET["id"];

$result = $invent->allmenu();
$num = $result->rowCount();

if ($num > 0) {

    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'id' => $menu_id,
            'name'=>$name_of_food,
            'catid'=>$category_id,
            'category'=>$category_name,
            'price'=>$price,
            'img'=>$img,
            'size' => $size,
            'restaurant'=>$restaurant_view
        );
        array_push($cat_arr["data"], $cat_item);
    }
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No Menu Found')
    );
}

?>