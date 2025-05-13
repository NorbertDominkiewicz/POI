var board = document.getElementById("board");
var kolumny = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var pionek = ["♙", "♟"];
var kon = ["♘", "♞"];
var laufer = ["♗", "♝"];
var wierza = ["♖", "♜"];
var krolowka = ["♕", "♛"];
var krol = ["♔", "♚"];
var asyncRequest; 
var spans;

function createPola() {
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
            var pole = document.createElement("div");
            pole.className = "pole";
            pole.id = "pole-" + kolumny[j] + (8 - i);
            
            if ((i + j) % 2 === 0) {
                pole.classList.add("white");
            } else {
                pole.classList.add("black");
            }
            
            board.appendChild(pole);
        }
    }
}

createPola();

function loadPozycje() {
    try {
        asyncRequest = new XMLHttpRequest();
        asyncRequest.onreadystatechange = load; 
        asyncRequest.open('GET', 'run.xml', true); 
        asyncRequest.send(null); 
    } catch (exception) {
        alert('Nie udało się załadować pliku XML');
    }
}

function clearPola(){
    spans = document.querySelectorAll(".pole span");
    for(let i = 0; i < spans.length; i++) {
        spans[i].parentNode.removeChild(spans[i]);
    }
}

function load() {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML) {
        var figures = asyncRequest.responseXML.getElementsByTagName("figura");
        for(var i = 0; i < figures.length; i++) {
            var fig = figures[i];
            var type = fig.getAttribute("type");
            var color = fig.getAttribute("color");
            var position = fig.getAttribute("position");
            var pole = document.getElementById("pole-" + position);
            
            if(pole) {
                var span = document.createElement("span");
                
                if(type === "pionek") {
                    if(color === "black") {
                        span.textContent = pionek[1];
                    } else {
                        span.textContent = pionek[0];
                    }
                }
                if(type === "kon") {
                    if(color === "black") {
                        span.textContent = kon[1];
                    } else {
                        span.textContent = kon[0];
                    }
                }
                if(type === "laufer") {
                    if(color === "black") {
                        span.textContent = laufer[1];
                    } else {
                        span.textContent = laufer[0];
                    }
                }
                if(type === "wierza") {
                    if(color === "black") {
                        span.textContent = wierza[1];
                    } else {
                        span.textContent = wierza[0];
                    }
                }
                if(type === "krolowka") {
                    if(color === "black") {
                        span.textContent = krolowka[1];
                    } else {
                        span.textContent = krolowka[0];
                    }
                }
                if(type === "krol") {
                    if(color === "black") {
                        span.textContent = krol[1];
                    } else {
                        span.textContent = krol[0];
                    }
                } 
                pole.appendChild(span);
            }
        }
    }
}
