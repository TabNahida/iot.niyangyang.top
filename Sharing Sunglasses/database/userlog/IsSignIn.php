<?php
    session_start();
    
    if(isset($_SESSION['name']))
    {
        $UserData = array("is_sign_in"=>true,
        "name"=>$_SESSION['name']);
    }
    else
    {
        $UserData = array("is_sign_in"=>false);
        //$UserData = array("is_sign_in"=>true,"name"=>"Tab","uid"=>114514);
    }
    echo json_encode($UserData);
?>