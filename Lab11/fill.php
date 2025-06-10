<?php
if (!empty($_GET['imie']) && !empty($_GET['nazwisko'])) {
    $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    $linie = $imie . ' ' . $nazwisko . '</br>' . PHP_EOL;
    file_put_contents('/tmp/php_name.txt', $linie, FILE_APPEND);
    header("Location: store_name.php");
}
?>