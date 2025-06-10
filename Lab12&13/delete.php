<?php
include('connection.php');

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];

    $kwerenda = "DELETE FROM uczelnie WHERE id = '$id'";

    if (mysqli_query($connection, $kwerenda)) {
        header("Location: index.php"); 
    }
} 
?>
