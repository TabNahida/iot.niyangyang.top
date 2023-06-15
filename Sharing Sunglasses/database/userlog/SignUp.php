<?php
session_start();
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);
$pwfile = $data["name"]."/password.dat";
$result = array();
if (file_exists($pwfile))
{
    $result["sign_up"] = false;
    $result["error"] = "Name exist";
}
else
{
    mkdir($data["name"]);
    $handle = fopen($pwfile,"w");
    fwrite($handle,$data["password"]);
    $result["sign_up"] = true;
    $_SESSION["name"] = $data["name"];
}
echo json_encode($result);
?>