<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/menu.php';

$database = new Database();
$db = $database->connect();
$invent = new menu($db);


$rest=$_GET['id'];

if(($rest=="1")||($rest=="2")){
    $invent->restaurant =1;
    $invent->restaurant_v =2;
    $result = $invent->allcategory();
    $num = $result->rowCount();
}
else if($rest=="3"){
    $invent->restaurant =1;
    $result = $invent->allcategoryv();
$num = $result->rowCount();
}


// $result = $invent->allcategory();
// $num = $result->rowCount();

if ($num > 0) {

    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
       
            $cat_item = array(
                'id' => $category_id,
            
                'category'=>$category_name,
            
               
                'rest'=>$restaurant_view
              
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