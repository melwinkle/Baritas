<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();
$invent = new orders($db);

$invent->id =$_GET['id'];
$result1 = $invent->kitchen();
$num1= $result1->rowCount();

if ($num1 > 0) {

  
    $cat_arr = array();
    $cat_arr["food"] = array();

    while ($row1 = $result1->fetch(PDO::FETCH_ASSOC)) {
        extract($row1);


  
    $cat_sing=array( 
        'name_of_food'=>$name_of_food,
        'quantity'=>$quantity,
        'category'=>$category
    );

    
   
   

        
       
        
    

        array_push($cat_arr['food'],$cat_sing);
   
    }
    
  
   
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No orders Found')
    );
}

?>