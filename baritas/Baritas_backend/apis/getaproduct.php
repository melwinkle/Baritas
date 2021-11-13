<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/Production.php';

$database = new Database();
$db = $database->connect();

$invent = new production($db);


$data = json_decode(file_get_contents("php://input"));

$invent->id = $_GET['id'];
$result= $invent->oneitem();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $cat_item = array(
        'production_id' => $production_id,
        'production_name'=>$product_name,
        'stock_limit'=>$stock_limit,
        'measurement'=>$measurement,
        'in_stock'=>$in_stock,
        'recipe' => $recipe
    );
   }
   echo '{"production": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'product does not exist')
    );
}

?>