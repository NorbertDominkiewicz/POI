<?php
include("connection.php");
session_destroy();
header("Location: ./");
exit();
?>