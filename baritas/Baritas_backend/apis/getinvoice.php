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



$result1 = $invent->onetransaction();

$num1= $result1->rowCount();


if($num1 >0 ){
    $cat_arr =array();
    $cat_arr['data']=array();
    
    while($row1=$result1->fetch(PDO::FETCH_ASSOC)){
        extract($row1);
        $invent->id = $transaction_id;


        $result= $invent->onetransactions();
        $num = $result->rowCount();
        $cat_sing = array(
         'transaction_id'=>$transaction_id,
         'restaurant'=>$restaurant_name,
         'Date'=>$Date
     );
    

    $cat_sing['product']=array();
    while($row=$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);

       $cat_item = array(
        'production_trans_id'=>$production_trans_id,
        'product_name'=>$product_name,
        'quantity'=>$quantity
     
    );
    array_push($cat_sing['product'],$cat_item);
   }
   array_push($cat_arr['data'],$cat_sing);
}


   echo json_encode($cat_arr);
}
else{
    echo json_encode(
        array('message' => 'invoice does not exist')
    );
}

?>