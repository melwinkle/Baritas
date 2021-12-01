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


if(isset($_GET['wid'])){
    $invent->id = $_GET['wid'];
$result= $invent->onewaiter();
$num = $result->rowCount();

if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);

       if($stats='0'){
           $stat="Inactive";
          }else{
            $stat="Active";
          }       
       $cat_item = array(
        'id' => $waiter_id,
        'fname'=>$waiter_name,
        'stats'=>$stats,
        'stat'=>$stat
    );
   }
   echo '{"employee": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'inventory does not exist')
    );
}

}else{
    $invent->id = $_GET['id'];
$result= $invent->onemployee();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
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


    if($stats='0'){
        $stat="Inactive";
       }else{
         $stat="Active";
       }    


    $cat_item = array(
        'id' => $user_id,
        'fname'=>$Firstname,
        'lname'=>$lastname,
        'role'=>$user_role,
        'user'=>$username,
        'pass' => $Pass,
        'rolename'=>$role_name,
        'stats'=>$stats,
        'stat'=>$stat
    );
   }
   echo '{"employee": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'inventory does not exist')
    );
}
}






?>