<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/employee.php';

$database = new Database();
$db = $database->connect();
$invent = new employee($db);

$invent->restaurant =$_GET['id'];
$result = $invent->allemployee();
$num = $result->rowCount();






if ($num > 0 ) {

    $cat_arr = array();
    $cat_arr["data"] = array();
    $cat_arr["waiter"] = array();


    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        if($user_role=='2'){
            $role_name="Kitchen";
        }
        else if($user_role=='3'){
            $role_name="Bar";
        }
        else if($user_role=='4'){
            $role_name="Cashier";
        }
        else{
            $role_name="Branch Manager";
        }



        if($stats=='1'){
            $stat='Active';
        }else{
            $stat='Inactive';
        }
        $cat_item = array(
            'id' => $user_id,
            'first'=>$Firstname,
            'last'=>$lastname,
            'role'=>$user_role,
            'user'=>$username,
            'pass' => $Pass,
            'stats'=>$stats,
            'rolename'=>$role_name,
            'stat'=>$stat
        );
        

        

        $invent->restaurant =$_GET['id'];
        $result_1 = $invent->allwaiters();
        $num_1 = $result_1->rowCount();
       
      
        array_push($cat_arr["data"], $cat_item);

        
       
    }
    if($num_1>0){
        while ($row_1= $result_1->fetch(PDO::FETCH_ASSOC)) {
                extract($row_1);
    
            if($stats=='1'){
                $state='Active';
            }else{
                $state='Inactive';
            }
                $cat_sing = array(
                    'wid' => $waiter_id,
                    'wfirst'=>$waiter_name,
                    'rest'=>$restaurant_id,
                    'stats'=>$stats,
                    'wstat'=>$state
                );
        
                array_push($cat_arr["waiter"], $cat_sing);
               
            }
           
        }
       
    

    echo json_encode($cat_arr);

} else {
    echo json_encode(
        array('message' => 'No inventory Found')
    );
}

?>