<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();
$invent = new orders($db);

$invent->restaurant =$_GET['id'];
$result = $invent->kitchens();
$num = $result->rowCount();

if ($num > 0) {

  
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $cat_item=array(
         'order_id' => $order_id,
            'special_notes'=>$special_notes
           
        );
        $cat_item["food"]=array();
        $cat_item["drink"]=array();
        $invent->id=$order_id;
        $result1=$invent->kitchen();
    
        $num1=$result1->rowCount();
        
        while($row1=$result1->fetch(PDO::FETCH_ASSOC)){
   
            extract($row1);

   if(($category!="3")&&(($ready_stats=="0")||($ready_stats=="1"))){
    $cat_sing=array( 
        'name_of_food'=>$name_of_food,
        'quantity'=>$quantity,
        'category'=>$category,
        'drinks'=>$drink_stats,
        'ready'=>$ready_stats
    );

    array_push($cat_item["food"],$cat_sing);
   }
   else if(($category!="3") &&($ready_stats=="1")){
    $cat_sing=array( 
        'name_of_food'=>$name_of_food,
        'quantity'=>$quantity,
        'category'=>$category,
        'drinks'=>$drink_stats,
        'ready'=>$ready_stats
    );
    array_push($cat_item["foodc"],$cat_sing);
   }
   else if(($drink_stats=="0") && ($ready_stats=="0")){
       
    $cat_sing=array(
        'item_id'=>$item_id, 
        'name_of_food'=>$name_of_food,
        'quantity'=>$quantity,
        'category'=>$category,
        'drinks'=>$drink_stats
    );

    array_push($cat_item["drink"],$cat_sing);
   }
        
       
        }
    

        array_push($cat_arr['data'],$cat_item);
   
       
    }
  
   
    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No orders Found')
    );
}

?>