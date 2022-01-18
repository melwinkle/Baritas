<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Menu.php';


$database = new Database();
$db = $database->connect();
$order = new menu($db);
$restaurant= $_GET['id'];


if(($restaurant=='1')||($restaurant=='2')){
    $order->restaurant=1;
    $order->restaurant_v=2;

    $result =$order->allcategory();
    $num = $result->rowCount();

}
else{
    $order->restaurant=1;
    $result =$order->allcategoryv();
    $num = $result->rowCount();

}


// Get row count


if ($num > 0) {
    // Cat array
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item = array(
            'category_id'=>$category_id,
            'category_name'=>$category_name
          

        );

        // Push to "data"
        array_push($cat_arr["data"], $cat_item);
    }

    // Turn to JSON & output
    echo json_encode($cat_arr);

} else {
    // No Categories
    echo json_encode(
        array('message' => 'No category Found')
    );
}
?>