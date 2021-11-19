<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../Baritas_backend/database/Database.php';
include_once '../../Baritas_backend/Model/users.php';

$database = new Database();
$db = $database->connect();

$user = new users($db);


$data = json_decode(file_get_contents("php://input"));

$user->username = $data->user;
$user->password = $data->pass;
$result= $user->login();
$num = $result->rowCount();


if($num >0){
    $cat_arr =array();
   

   while($row =$result->fetch(PDO::FETCH_ASSOC)){
       extract($row);
       $cat_item = array(
           'firstname'=>$Firstname,
           'lastname'=>$lastname,
           'role'=>$user_role,
           'rest'=>$Restaurant,
           'status'=>$stats
       );
   }
   echo '{"UserData": ' .json_encode($cat_item).' }';
}
else{
    echo json_encode(
        array('message' => 'User does not exist')
    );
}
?>
