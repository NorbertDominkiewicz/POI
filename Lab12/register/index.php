<?php
include('../connection.php');
$search;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL-Viewer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="up" class="upperPanel">
        <div class="title">
            <!-- <h2>MySQL Viewer</h2> -->
             <a href="../"><img src="../graphics/logo.png" alt=""></a>
        </div>
    </div>
    <div id="mp" class="middlePanel">
        <div class="container">
            <form action="register.php" method="POST" autocomplete="off">
                <input type="text" placeholder="Type login: " name="login" autocomplete="off">
                <input type="password" placeholder="Password: " name="password" autocomplete="off">
                <input type="password" placeholder="Repeat password: " autocomplete="off">
                <hr style='border-radius: 5px; border: 2px solid black; width: 100%'>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
    <div id="bp" class="bottomPanel">
        <div class="footer">
            <p>Laboratorium 13</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>