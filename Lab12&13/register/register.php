<?php
include("../connection.php");

$login;
$password;

if(isset($_POST['login'])){
    $login = $_POST['login'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}

$query = "INSERT INTO uzytkownicy (`login`, `password`) VALUES ('$login', '$password')";
mysqli_query($connection, $query);
header('Location: ../');

?>