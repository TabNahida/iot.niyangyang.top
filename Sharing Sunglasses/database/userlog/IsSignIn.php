<?php
    session_start();
    
    if(isset($_SESSION['uid']) and isset($_SESSION['name']))
    {
        $UserData = array("is_sign_in"=>true,
        "uid"=>$_SESSION['uid'],
        "name"=>$_SESSION['name']);
    }
    else
    {
        $UserData = array("is_sign_in"=>false);
    }
    echo json_encode($UserData);
?>