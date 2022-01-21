<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/employee.php';

$database = new Database();
$db = $database->connect();

$invent = new employee($db);


$data = json_decode(file_get_contents("php://input"));


$invent->restaurant = $_GET["id"];

$result = $invent->allwaiters();
$num = $result->rowCount();

if($num >0){
    $cat_arr =array();
    $cat_arr["data"]=array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);

       if($stats=='1'){
            $cat_item = array(
            'id' => $waiter_id,
            'fname'=>$waiter_name,
            'stats'=>$stats
        );

        array_push($cat_arr["data"], $cat_item);
           
          }       
       
   }
   echo json_encode($cat_arr);
}
else{
    echo json_encode(
        array('message' => 'no waiters')
    );
}



?>