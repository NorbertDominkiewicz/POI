<?php

$server = 'localhost';
$user = 'admin';
$password = 'root';
$bazasql = 'pwi12';

$connection = mysqli_connect($server, $user, $password, $bazasql);

if(!$connection){
    echo("No connection. Repair connection.php");
}

session_start();

?>