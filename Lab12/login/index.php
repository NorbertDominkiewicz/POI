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
            <form action="login.php" method="POST">
                <input type="text" placeholder="Login: " name="login">
                <hr style='border-radius: 5px; border: 2px solid black; width: 100%'>
                <div style="display: flex; align-items: center; flex-direction: column; justify-content: space-evenly; gap: 20px;">
                    <input type="password" placeholder="Password: " name="password">
                    <button type="button">Show Password</button>
                </div>
                <hr style='border-radius: 5px; border: 2px solid black; width: 100%'>
                <button type="submit">Login</button>
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