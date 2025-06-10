<?php
include('connection.php');

$id = "";
$nazwa_uczelni = "";
$kierunek_studiow = "";
$profil_studiow = "";
$uzyskiwany_tytul = "";
$jezyk_ksztalcenia = "";
$liczba_studentow = 0;
$udzial_kobiet = 0;
$liczba_kobiet = 0;
$udzial_cudzoziemcow = 0;
$liczba_cudzoziemcow = 0;

if(isset($_GET['nazwa_uczelni'])){
    $nazwa_uczelni = $_GET['nazwa_uczelni'];
}

if(isset($_GET['kierunek_studiow'])){
    $kierunek_studiow = $_GET['kierunek_studiow'];
}

if(isset($_GET['profil_studiow'])){
    $profil_studiow = $_GET['profil_studiow'];
}

if(isset($_GET['uzyskiwany_tytul'])){
    $uzyskiwany_tytul = $_GET['uzyskiwany_tytul'];
}

if(isset($_GET['jezyk_ksztalcenia'])){
    $jezyk_ksztalcenia = $_GET['jezyk_ksztalcenia'];
}

if(isset($_GET['liczba_studentow'])){
    $liczba_studentow = $_GET['liczba_studentow'];
}

if(isset($_GET['udzial_kobiet'])){
    $udzial_kobiet = $_GET['udzial_kobiet'];
}

if(isset($_GET['liczba_kobiet'])){
    $liczba_kobiet = $_GET['liczba_kobiet'];
}

if(isset($_GET['udzial_cudzoziemcow'])){
    $udzial_cudzoziemcow = $_GET['udzial_cudzoziemcow'];
}

if(isset($_GET['liczba_cudzoziemcow'])){
    $liczba_cudzoziemcow = $_GET['liczba_cudzoziemcow'];
}

$kwerenda = "INSERT INTO uczelnie 
(`nazwa_uczelni`, `kierunek_studiow`, `profil_studiow`, `uzyskiwany_tytul`, `jezyk_ksztalcenia`, `liczba_studentow`, `udzial_kobiet`, `liczba_kobiet`, `udzial_cudzoziemcow`, `liczba_cudzoziemcow`) 
VALUES 
('$nazwa_uczelni', '$kierunek_studiow', '$profil_studiow', '$uzyskiwany_tytul', '$jezyk_ksztalcenia', '$liczba_studentow', '$udzial_kobiet', '$liczba_kobiet', '$udzial_cudzoziemcow', '$liczba_cudzoziemcow')";
mysqli_query($connection, $kwerenda);
header('Location: index.php');

?>
