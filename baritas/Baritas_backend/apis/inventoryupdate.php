<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');


$con = mysqli_connect("localhost","root","","baritas");
 
//  $look =1;
//  $rest_id=1;
$data = json_decode(file_get_contents("php://input"));


    $look = $data->menu;
    $rest_id= $data->rest;
    $quant =$data->quantity;

    $sql = "SELECT * from menu where restaurant='$rest_id' and menu_id='$look'";

    $result =mysqli_query($con,$sql);
    $num = mysqli_num_rows($result);
    
    if($num>0){
       while($row = mysqli_fetch_assoc($result)) {
           if($row['name_of_food']=='Egg Fried Rice'){
               $user = array(
                   "oil"=>16,
                   "eggs"=>1,
                   "Lele Rice"=>88.8,
                   "Texas Rice"=>45.5,
                   "Soy Sauce"=>10,
                   "Rice Mix"=>7
               );
               foreach($user as $x=>$val){
                  $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
                  $result1 = mysqli_query($con,$sql1);
                  }
                  if($result1){
                   echo "true";
                   break;
               }
   
           }

           else if($row['name_of_food']=='Beef Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Beef"=>5.5    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Chicken Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "chicken"=>5    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }

           else if($row['name_of_food']=='Pork Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Pork"=>6.75    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Shrimp Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Shrimps Carm"=>20,
                "Shrimps Nunoo"=>20    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Special Fried RIce'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Beef"=>3.65,
                "Chicken"=>3.3    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Special Curry Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Curry Powder"=>5,
                "Tin Tomato"=>10,
                "Powdered Pepper"=>5,
                "Beef"=>3.65,
                "Chicken"=>3.3   
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=="Moama's Delight"){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Pork"=>4.5,
                "Chicken"=>3.3    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=="Barita's Jumbo Fried Rice"){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Beef"=>2.2,
                "Chicken"=>2,
                "Shrimps Nunoo"=>8,
                "Pork"=>2.9    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }

           else if($row['name_of_food']=='Seafood Delight'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7,
                "Squid"=>2.5,
                "Shrimps Nunoo"=>8,
                "Filleted Fish"=>3.5    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Mix it yourself Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7  
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result1 = mysqli_query($con,$sql1);
               }
               if($result1){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Jollof Rice'){
            $user = array(
                "Lele Rice"=>350,
                "Jollof Sauce"=>0.13    
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result = mysqli_query($con,$sql1);
               }
               if($result){
                echo "true";
                break;
            }

           }
           else if($row['name_of_food']=='Steamed Rice'){
            $user = array(
                "Lele Rice"=>150, 
                "Red Stew"=>0.08 
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-($val*$quant) where product_name='$x' and restaurant='$rest_id'";
               $result = mysqli_query($con,$sql1);
               }
               if($result){
                echo "true";
                break;
            }

           }
       }
    }






