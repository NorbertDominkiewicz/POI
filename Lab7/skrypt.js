var words = [
    "gitara",
    "nuta", //
    "piosenka", //
    "opera", //
    "smyczek", //
    "koncert", //
    "fortepian", //
    "mikrofon", // 
    "melodia", //
    "skrzypce", //
    "rytm" //
];

var hints = [
    "Ma struny, gra się palcami",
    "Zapis dźwięku w melodii",
    "Śpiewany utwór muzyczny",
    "Śpiewana sztuka teatralna",
    "Służy do gry na skrzypcach",
    "Występ muzyków na scenie",
    "Najwiekszy klawiszowy instrument",
    "Wzmacnia głos wokalisty podczas występu",
    "Rytmiczne dźwięki w piosence",
    "Małe, smyczkowe, trzymane pod brodą",
    "Nadaje tempo w muzyce"
];

var tileSize = 70;
var gameBoard = document.getElementById("gameBoard");
var startPoints = [];
var toResult = 0;
var gameTilesObj = [];

var gameTiles = [
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,"f","fortepian", "ver",hints[6]],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,"m","mikrofon","ver",hints[7]],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"o","opera","hor",hints[3]],[1,"p"],[1,"e"],[1,"r","rytm","ver",hints[10]],[1,"a"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[1,"i"],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"r"],[0,""],[0,""],[0,"y"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[1,"k","koncert","hor",hints[5]],[1,"o"],[1,"n"],[0,"c"],[1,"e"],[1,"r"],[1,"t"],[0,""],[0,""],[1,"t"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[1,"r"],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"e"],[0,""],[0,""],[1,"m", "melodia","hor",hints[8]],[0,"e"],[1,"l"],[1,"o"],[1,"d"],[1,"i"],[1,"a"],[0,""]],
    [[0,""],[0,""],[0,""],[1,"o"],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"p"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,"f"],[0,""],[0,""],[0,""],[0,""],[0,"p","piosenka","hor",hints[2]],[1,"i"],[1,"o"],[1,"s","smyczek","ver",hints[4]],[1,"e"],[1,"n","nuta","ver",hints[1]],[1,"k"],[1,"a"],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[1,"o"],[0,""],[0,""],[0,"g","gitara","ver",hints[0]],[0,""],[0,""],[1,"a"],[0,""],[0,"m"],[0,""],[1,"u"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[1,"n"],[0,""],[0,""],[1,"i"],[0,""],[0,""],[1,"n"],[0,""],[1,"y"],[0,""],[1,"t"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"t"],[0,""],[0,""],[0,""],[0,""],[1,"c"],[0,""],[0,"a"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"a"],[0,""],[0,""],[0,""],[0,""],[1,"z"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[1,"s", "skrzypce","hor",hints[9]],[1,"k"],[1,"r"],[1,"z"],[1,"y"],[1,"p"],[1,"c"],[0,"e"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[1,"a"],[0,""],[0,""],[0,""],[0,""],[1,"k"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    [[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]]
];

function findStarts(){
    for(let i = 0; i < 18; i++){
        for(let j = 0; j < 20; j++){
            if((gameTiles[i][j][2] != null)){
                var wordLen = gameTiles[i][j][2].length;
                startPoints.push([i,j,wordLen,gameTiles[i][j][3],gameTiles[i][j][4]]);
            }
        }
    }
}

function writeOutStarts(){
    for(let i = 0; i < startPoints.length; i++){
        console.log(startPoints[i]);
    }
}

function drawGameTiles() {
    for (let i = 0; i < 18; i++) {
        var arr = [];
        for (let j = 0; j < 20; j++) {
            arr.push(null); 
        }
        gameTilesObj.push(arr);
    }

    for (let i = 0; i < 18; i++) {
        for (let j = 0; j < 20; j++) {
            if ((gameTiles[i][j][0] == 0) && gameTiles[i][j][1].length > 0) {
                var Tile = document.createElement("div");
                Tile.setAttribute("class", "tile");
                Tile.style.left = (j * tileSize) + "px";
                Tile.style.top = (i * tileSize) + "px";
                Tile.innerHTML = gameTiles[i][j][1];
                gameTilesObj[i][j] = Tile;
                gameBoard.append(Tile);
            } else if ((gameTiles[i][j][0] == 1)) {
                var Tile = document.createElement("input");
                Tile.setAttribute("class", "tileInput");
                Tile.setAttribute("maxlength", "1");
                Tile.style.left = (j * tileSize) + "px";
                Tile.style.top = (i * tileSize) + "px";
                gameTilesObj[i][j] = Tile;
                gameBoard.append(Tile);
            }
        }
    }
}


function writeOutWords(){
    for(let i = 0; i < words.length; i++){
        console.log(words[i]);
    }
}

function wordsChecker() {
    for (let i = 0; i < startPoints.length; i++) {
        checkWord(startPoints[i]);
    }
}


function checkWord(word) {
    let toCount = word[2]; 
    let allCorrect = true;
    for (let i = 0; i < toCount; i++) {
        let y;
        let x;
        if (word[3] === "ver") {
            y = word[0] + i;
            x = word[1];
        } else {
            y = word[0];
            x = word[1] + i;
        }
        if (gameTilesObj[y] === null || gameTilesObj[y][x] === null) {
            allCorrect = false;
            break;
        }
        let element = gameTilesObj[y][x];
        let inputValue = "";
        if (element.className === "tileInput") {
            if (element.value !== null && element.value !== null) {
                inputValue = element.value.toLowerCase();
            } else {
                inputValue = "";
            }
        } else if (element.className === "tile") {
            if (element.textContent !== null && element.textContent !== null) {
                inputValue = element.textContent.toLowerCase();
            } else {
                inputValue = "";
            }
        }
        let correctValue = gameTiles[y][x][1].toLowerCase();

        if (inputValue !== correctValue) {
            allCorrect = false;
            break;
        }
    }

    for (let i = 0; i < toCount; i++) {
        let y;
        let x;

        if (word[3] === "ver") {
            y = word[0] + i;
            x = word[1];
        } else {
            y = word[0];
            x = word[1] + i;
        }

        if (gameTilesObj[y] !== null && gameTilesObj[y][x] !== null) {
            let tile = gameTilesObj[y][x];
            if (allCorrect === true) {
                tile.style.backgroundColor = "lightgreen";
            } else {
                tile.style.backgroundColor = "white";
            }
            if (tile.className === "tileInput") {
                tile.style.color = "black";
            }
        }
    }
    if(allCorrect){
        toResult += 1;
    }
}

function createHints() {
    for(let i = 0; i < startPoints.length; i++) {
        var word = startPoints[i];
        var hint = document.createElement("div");
        hint.setAttribute("class", "hint");
        hint.id = "hint_" + i;
        hint.style.left = (word[1] * tileSize + 30) + "px";
        hint.style.top = (word[0] * tileSize - 60) + "px";
        hint.innerHTML = word[4];
        gameBoard.appendChild(hint);
    }
}

function addHoverEvents() {
    for (let i = 0; i < startPoints.length; i++) {
        var word = startPoints[i];
        for (let j = 0; j < word[2]; j++) {
            let y;
            let x;
            if (word[3] === "ver") {
                y = word[0] + j;
                x = word[1];
            } else {
                y = word[0];
                x = word[1] + j;
            }

            var tile = gameTilesObj[y][x];
            if (tile) {
                tile.onmouseover = function() {
                    document.getElementById("hint_" + i).style.display = 'block';
                };
                
                tile.onmouseout = function() {
                    document.getElementById("hint_" + i).style.display = 'none';
                };
            }
        }
    }
}

function showTutorial(){
    var tutorial = document.getElementById("tutorial");
    gameBoard.style.visibility = "hidden";
    tutorial.style.display = "block";
}

function closeTutorial(){
    var tutorial = document.getElementById("tutorial");
    gameBoard.style.visibility = "visible";
    tutorial.style.display = "none";
}


drawGameTiles();
findStarts();
writeOutStarts();
createHints(); 
addHoverEvents();
