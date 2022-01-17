<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/orders.php';

$database = new Database();
$db = $database->connect();
$invent = new orders($db);


if(isset($_GET['id'])){


$invent->restaurant =$_GET['id'];
$result = $invent->cashier();
$num = $result->rowCount();

if ($num > 0) {

  
    $cat_arr = array();
    $cat_arr["data"] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

    if($stats=='Completed'){
        if($dine_type=="Dine-In"){
            $dine=$dine_type.':Table'.$table_id;
        }
        else{
            $dine=$dine_type;
        }


    $vat=(2.5/100)*($total_cost);
        $cat_item=array(
         'order_id' => $order_id,
            'special_notes'=>$special_notes,
            'date'=>$date,
            'pay'=>$payment_method,
            'waiter'=>$waiter_name,
            'total'=>$total_cost,
            'table'=>$dine,
            'sub'=>$sub_total,
            'vat'=>$vat,
            'stats'=>$stats


           
        );
    
      
   
    

        array_push($cat_arr['data'],$cat_item);
   
    }
    }
  
   
    echo json_encode($cat_arr);

} 
else {
    echo json_encode(
        array('message' => 'No orders Found')
    );
}


}

else{
        $invent->id =$_GET['sid'];
        $result1 = $invent->oneitem();
        $num1= $result1->rowCount();

        if ($num1 > 0) {

        
            $cat_arrs = array();
            $cat_arrs['data']=array();

            while ($row1 = $result1->fetch(PDO::FETCH_ASSOC)) {
                    extract($row1);
                
                    if($dine_type=="Dine-In"){
                        $dine=$dine_type.':Table'.$table_id;
                    }
                    else{
                        $dine=$dine_type;
                    }
            
                
                    $vat=(2.5/100)*($total_cost);
                    $cat_items=array(
                    'order_id' => $order_id,
                        'special_notes'=>$special_notes,
                        'date'=>$date,
                        'pay'=>$payment_method,
                        'waiter'=>$waiter_name,
                        'total'=>$total_cost,
                        'table'=>$dine,
                        'sub'=>$sub_total,
                        'vat'=>$vat,
                        'stats'=>$stats  
                    );
                  

                    $cat_items["order"] = array();
                    $invent->id =$order_id;
                    $result2 = $invent->kitchen();
                    $num2= $result2->rowCount();
                        
        
                    while ($row2 = $result2->fetch(PDO::FETCH_ASSOC)) {
                        extract($row2);
                        $cat_sing=array( 
                            'name_of_food'=>$name_of_food,
                            'quantity'=>$quantity,
                            'category'=>$category,
                            'order_id'=>$order_id,
                            'item_id'=>$item_id,
                            'price'=>$fprice
                        );
                
                        array_push($cat_items['order'],$cat_sing);
                    }
                
                    array_push($cat_arrs['data'],$cat_items);
            
        
                   
                   
        
                }
            
        
            echo json_encode($cat_arrs);


        } else {
            echo json_encode(
                array('message' => 'No orders Found')
            );
        }


}


?>