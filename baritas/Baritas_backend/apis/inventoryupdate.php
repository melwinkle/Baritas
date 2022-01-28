<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');


$con = mysqli_connect("localhost","root","","baritas");
 
$data = json_decode(file_get_contents("php://input"));

        $look = $data->menu;
        $rest_id = $data->rest;
        $quant = $data->quantity;

    $sql = "SELECT * from menu where menu_id='$rest_id' and menu_id='$look'";

    $result =mysqli_query($con,$sql);
    $num = mysqli_num_rows($result);
    
    if($num>0){
       while($row = mysqli_fetch_assoc($result)) {
        preg_match_all("/([^,= ]+)=([^,= ]+)/", $row["recipe"], $r);
        $newarray= array_combine($r[1], $r[2]);
               foreach($newarray as $x=>$val){
                  $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant_id='$rest_id'";
                  $result1 = mysqli_query($con,$sql1);
                  }
                  if($result1){
                   echo "true";
                   break;
               } 
       }
    }
    
 




