<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/inventory.php';

$database = new Database();
$db = $database->connect();

$invent = new inventory($db);


$data = json_decode(file_get_contents("php://input"));

$invent->id = $_GET['id'];
$result= $invent->oneitem();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $cat_item = array(
        'id' => $product_id,
        'name'=>$product_name,
        'category'=>$category,
        'unit'=>$Unit_price,
        'inn'=>$in_stock,
        'img'=>$img,
        'Measure' => $Measurement,
        'rest'=>$restaurant,
        'limit'=>$in_stock_limit
    );
   }
   echo '{"inventory": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'inventory does not exist')
    );
}

?>