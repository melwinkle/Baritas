<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Menu.php';

$database = new Database();
$db = $database->connect();

$invent = new menu($db);


$data = json_decode(file_get_contents("php://input"));

$invent->id = $_GET['id'];
$result= $invent->oneitem();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
    $cat_arr['data']=array();

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $cat_item = array(
        'id' => $menu_id,
        'name'=>$name_of_food,
        'catid'=>$category_id,
        'category'=>$category_name,
        'price'=>$price,
        'size' => $size,
        'restaurant' => $restaurant_view
    );
    // array_push($cat_arr['data'],$cat_item);
   }
   echo '{"Menu": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'menu does not exist')
    );
}

?>