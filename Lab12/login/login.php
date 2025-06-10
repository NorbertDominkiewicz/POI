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

$query = "SELECT * FROM uzytkownicy WHERE login = '$login' AND password = '$password'";
$mysqlQuery = mysqli_query($connection, $query);
$request = mysqli_fetch_assoc($mysqlQuery);

if($request){
    $_SESSION['login'] = $request['login'];
    echo("logged");
    header('Location: ../');
    exit();
}

?>