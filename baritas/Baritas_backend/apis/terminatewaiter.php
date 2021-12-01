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
$invent->id=$_GET['id'];

if($invent->terminatew()){
    echo true;
}
else{
    echo false;
}
?>