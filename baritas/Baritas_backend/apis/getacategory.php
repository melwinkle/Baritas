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
$result= $invent->onecategory();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
    $cat_arr['data']=array();

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       if($restaurant_view=="1"){
           $rest="All";
       }else{
           $rest="Adenta/Atomic";
       }
       $cat_item = array(
        'id' => $category_id,
        'name'=>$category_name,
        'restaurant'=>$restaurant_view,
        'restr'=>$rest
        
    );
    // array_push($cat_arr['data'],$cat_item);
   }
   echo '{"category": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'menu does not exist')
    );
}

?>