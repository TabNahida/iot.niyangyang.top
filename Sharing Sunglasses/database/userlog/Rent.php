<?php
session_start();
$jsonData = file_get_contents("php://input");
$result = array();
if (isset($_SESSION["name"]))
{
    $data = json_decode($jsonData, true);
    $pwfile = $_SESSION["name"]."/password.dat";
    
    if (file_exists($pwfile))
    {
        $handle = fopen($pwfile,"r");
        if (fread($handle,filesize($pwfile)) == $data["password"])
        {
            $result["is_rent"] = true;
            fwrite(fopen($_SESSION["name"]."/rent.log","a"),date('Y-m-d H:i:s')."\n");
        }
        else
        {
            $result["is_rent"] = false;
            $result["error"] = "Error password";
        }
    }
}
else
{
    $result["is_rent"] = false;
    $result["error"] = "Not sign in yet";
}
echo json_encode($result);
?>