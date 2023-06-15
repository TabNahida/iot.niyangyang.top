<?php
session_start();
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);
$pwfile = $data["name"]."/password.dat";
$result = array();
if (file_exists($pwfile))
{
    $handle = fopen($pwfile,"r");
    if (fread($handle,filesize($pwfile)) == $data["password"])
    {
        $result["sign_in"] = true;
        $_SESSION["name"] = $data["name"];
    }
    else
    {
        $result["sign_in"] = false;
        $result["error"] = "Error password";
    }
}
else
{
    $result["sign_in"] = false;
        $result["error"] = "Error name";
}
echo json_encode($result);
?>