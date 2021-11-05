<?php
 $con = mysqli_connect("localhost","root","","baritas");

 $look =$_POST['menu'];
 $rest_id=$_POST['rest'];


 $sql = "SELECT * from menu where restaurant='$rest_id' and menu_id='$look'";

 $result =mysqli_query($con,$sql);
 $num = $result->rowCount();
 
 if($num>0){
    while($row = $result->fetch_assoc()) {
        if($row['name_of_the_food']=='Egg Fried Rice'){
            $user = array(
                "oil"=>16,
                "eggs"=>1,
                "Lele Rice"=>88.8,
                "Texas Rice"=>45.5,
                "Soy Sauce"=>10,
                "Rice Mix"=>7
            );
            foreach($user as $x=>$val){
               $sql1="UPDATE inventory SET in_stock=in_stock-$val where product_name='$x' and restaurant='$rest_id'";
               $result = mysqli_query($con,$sql1);
               if($result){
                   echo "true";
                   break;
               }
            }

        }
    }
 }



