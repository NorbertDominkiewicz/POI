<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Name Filler</title>
</head>
<body>
    <div class="upperPanel">
        <div class="title">
            <h2>Name Filler</h2>
        </div>
        <div class="links">
            <div class="menu">
                <img src="graphics/menu.png">
                <div class="buttons">
                    <button onclick="headTo('PHP')">PHP</button>
                    <button onclick="headTo('CGI')">PYTHON</button>
                </div>
            </div>
        </div>
    </div>
    <div class="middlePanel">
        <div class="content">
            <div class="leftSide">
                <form method="GET" action="fill.php">
                    <input type="text" name="imie" placeholder="Imie: ">
                    <input type="text" name="nazwisko" placeholder="Nazwisko: ">
                    <button type="submit">Add</button>
                </form>
            </div>
            <div class="rightSide">
                <p style='font-style: italic'>Imiona i nazwiska</p>
                <?php
                if (file_exists('/tmp/php_name.txt')) {
                    echo "<p>" . file_get_contents('/tmp/php_name.txt') . "</p>";
                } else {
                    echo "<p>Nie znaleziono pliku</p>";
                }
                ?>
            </div>
        </div>
    </div>
    <div class="bottomPanel">
        <div class="footer">
            <p>
                <a href="https://alioth.uwb.edu.pl/pwi-lab/apache.html">Laboratorium 11</a>
            </p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>