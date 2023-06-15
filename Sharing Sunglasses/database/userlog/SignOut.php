<?php
session_start();
if(isset($_SESSION['name']))
{
    unset($_SESSION['name']);
}
?>
<head>
    <meta charset="utf-8">
    <base href="http://iot.niyayang.top/">
    <link rel="stylesheet" type="text/css" href="style/index.css">
    <script>
        window.location.href = "/service/sign.html"
    </script>
    <title>Adjustable Sharing Sunglasses</title>
</head>