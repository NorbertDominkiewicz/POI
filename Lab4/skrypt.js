let wyniki = [];

function showAdv(){
    let advBtn = document.getElementById("advBtn");
    let opcje = document.getElementById("opcje");
    advBtn.style.display = "none";
    opcje.style.display = "block";
}

function hideAdv(){
    let advBtn = document.getElementById("advBtn");
    let opcje = document.getElementById("opcje");
    opcje.style.display = "none";
    advBtn.style.display = "block";
}

function putLiczba(liczba){
    var input = document.getElementById("dzialanie");
    input.value += liczba;
}

function putOperacja(operacja){
    var input = document.getElementById("dzialanie");
    input.value += operacja;
}

function oblicz(Operacja) {
    var input = document.getElementById("dzialanie");
    var string = input.value;
    var operacje = ["+", "-", "/", "×"];
    var operacja;
    var liczby = [];
    var wynik;
    var ostatniaLiczba = "";

    for (let i = 0; i < string.length; i++) {
        let znak = string[i];
        if (operacje.includes(znak)) {
            if (ostatniaLiczba) {
                liczby.push(ostatniaLiczba);
                ostatniaLiczba = "";  
            }
            operacja = znak;
            liczby.push(znak);  
        } else {
            ostatniaLiczba += znak; 
        }
    }

    if (ostatniaLiczba) {
        liczby.push(ostatniaLiczba); 
    }

    if (liczby[2] == null){
        operacja = Operacja;
    }

    switch(operacja){
        case "+":
            wynik = parseInt(liczby[0]) + parseInt(liczby[2]);
        break;
        case "-":
            wynik = parseInt(liczby[0]) - parseInt(liczby[2]);
        break;
        case "×":
            wynik = parseInt(liczby[0]) * parseInt(liczby[2]);
        break;
        case "/":
            if(liczby[2] == '0'){
                wynik = "Nie dzielimy przez 0 !"
            } else {
                wynik = parseInt(liczby[0]) / parseInt(liczby[2]);
            }
        break;
        case "potega":
            wynik = Math.pow(parseInt(liczby[0]),2);
        break;
        case "pierwiastek":
            wynik = Math.sqrt(parseInt(liczby[0]));
        break;
        case "tangens":
            wynik = Math.tan(parseInt(liczby[0]));
        break;
        case "cosinus":
            wynik = Math.cos(parseInt(liczby[0]));
        break;
        case "sinus":
            wynik = Math.sin(parseInt(liczby[0]));
        break;

    }

    dodajWynik(wynik);
    input.value = "";
}

function dodajWynik(wynik) {
    wyniki.push(wynik);
    var results = document.getElementById("wyniki");
    results.innerHTML += "<hr style='border-radius: 12px; border: 2px solid white;'><div class='wynik'>" + wyniki[wyniki.length - 1] + "</div>";  
}