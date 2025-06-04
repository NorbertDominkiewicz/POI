<?php
include('connection.php');
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
             <a href=""><img src="graphics/logo.png" alt=""></a>
        </div>
        <div class="search">
            <form action="" method='get'>
                <input type="text" name="search" id="" placeholder="
                <?php 
                if(isset($_GET['search'])){
                    echo($_GET['search']);
                } else{
                    echo("Wprowadź czego szukasz...");
                }
                ?>
                ">
                <!-- <button type="submit"><img src="graphics/search.svg" alt=""></button> -->
            </form>
        </div>
        <div class="links">
            <ul>
                <!--<li><button>Zmień bazę danych</button></li>-->
                <!-- <li><button onclick="add()">Dodaj dane</button></li> -->
                <li><button><img src="graphics/user.png" alt=""></button>
                    <div class="drop">
                        <button>Ustawienia</button>
                        <button>Wyloguj</button>
                    </div>
                </li>
        </div>
    </div>
    <div id="mp" class="middlePanel">
        <div class="container">
            <table>
                <tr style="background-color: #8a7474; color: white; height: 70px;">
                    <th style="border-top-left-radius: 32px;" >ID</th>
                    <th>Nazwa uczelni</th>
                    <th>Kierunek studiów</th>
                    <th>Profil studiów</th>
                    <th>Uzyskiwany tytuł</th>
                    <th>Język</th>
                    <th>Liczba studentów</th>
                    <th>Udział kobiet</th>
                    <th>Liczba kobiet</th>
                    <th>Udział cudzoziemców</th>
                    <th colspan="2" style="border-top-right-radius: 32px;">Liczba cudzoziemców</th>
                </tr>
            <?php
            $kwerenda;
            if(isset($_GET['search'])){
                $search = $_GET['search'];
                $kwerenda = "SELECT * FROM uczelnie WHERE nazwa_uczelni LIKE '%$search%' OR kierunek_studiow LIKE '%$search%' OR profil_studiow LIKE '%$search%' OR uzyskiwany_tytul LIKE '%$search%'";
            } else {
                $kwerenda = "SELECT * FROM uczelnie";
            }
            $queryAll = mysqli_query($connection, $kwerenda);
            while($writeOut = mysqli_fetch_assoc($queryAll)){
                $id = $writeOut['id'];
                $nazwa_uczelni = $writeOut['nazwa_uczelni'];
                $kierunek_studiow = $writeOut['kierunek_studiow'];
                $profil_studiow = $writeOut['profil_studiow'];
                $uzyskiwany_tytul = $writeOut['uzyskiwany_tytul'];
                $jezyk_ksztalcenia = $writeOut['jezyk_ksztalcenia'];
                $liczba_studentow = $writeOut['liczba_studentow'];
                $udzial_kobiet = $writeOut['udzial_kobiet'];
                $liczba_kobiet = $writeOut['liczba_kobiet'];
                $udzial_cudzoziemcow = $writeOut['udzial_cudzoziemcow'];
                $liczba_cudzoziemcow = $writeOut['liczba_cudzoziemcow'];
                echo
                ("
                    <tr>
                        <td>$id</td>
                        <td>$nazwa_uczelni</td>
                        <td>$kierunek_studiow</td>
                        <td>$profil_studiow</td>
                        <td>$uzyskiwany_tytul</td>
                        <td>$jezyk_ksztalcenia</td>
                        <td>$liczba_studentow</td>
                        <td>$udzial_kobiet</td> 
                        <td>$liczba_kobiet</td>
                        <td>$udzial_cudzoziemcow</td>
                        <td>$liczba_cudzoziemcow</td>
                        <td style='border-left: 2px solid black'><img style='cursor: pointer' onclick=\"del($id)\" src='graphics/delete.svg'></td>
                    </tr>
                ");
                echo("<tr><td colspan='12'><hr style='border-radius: 5px; border: 2px solid black;'></td></tr>");
            }
            ?>
            </table>
        </div>
    </div>
    <div id="bp" class="bottomPanel">
        <div class="footer">
            <p>Laboratorium 12 & <a href="https://radon.nauka.gov.pl/raporty/oferta_dydaktyczna">Zródło na potrzeby zadania</a></p>
        </div>
    </div>
    <div id="adder" class="adder">
         <form action="add.php" method="POST">
            <img class="close" onclick="close()" src="graphics/close.svg">
            <p>Dodaj uczelnię</p>
                <input type="text" name="nazwa_uczelni" id="" placeholder="Nazwa uczelni">
                <input type="text" name="kierunek_studiow" id="" placeholder="Kierunek studiów">
                <input type="text" name="profil_studiow" id="" placeholder="Profil studiów">
                <input type="text" name="uzyskiwany_tytul" id="" placeholder="Uzyskiwany tytuł">
                <input type="text" name="jezyk_ksztalcenia" id="" placeholder="Język">
                <input type="text" name="liczba_studentow" id="" placeholder="Liczba studentów">
                <input type="text" name="udzial_kobiet" id="" placeholder="Udział kobiet">
                <input type="text" name="liczba_kobiet" id="" placeholder="Liczba kobiet">
                <input type="text" name="udzial_cudzoziemcow" id="" placeholder="Udział cudzoziemców">
                <input type="text" name="liczba_cudzoziemcow" id="" placeholder="Liczba cudzoziemców">
            <button type="submit"><img src="graphics/upload.png"></button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>