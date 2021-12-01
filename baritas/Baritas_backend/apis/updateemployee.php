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
$invent->id=$data->id;
$invent->firstname=$data->fname;
$invent->lastname=$data->lname;
$invent->user_role= $data->role;
$invent->username= $data->user;
$invent->password=$data->pass;

if($invent->updateemployee()){
    echo true;
}
else{
    echo false;
}
?>