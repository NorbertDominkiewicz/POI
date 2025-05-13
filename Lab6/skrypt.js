let mapa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var gamePanel = document.getElementById("gamePanel")

function drawMap() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 16; j++) { 
            let blok = document.createElement("div");
            blok.style.position = "absolute";
            blok.style.width = "96px"; 
            blok.style.height = "96px"; 
            blok.style.left = (j * 96) + "px";
            blok.style.top = (i * 96) + "px";
            if (mapa[i][j] === 1) {
                blok.style.backgroundImage = 'url("graphics/grassBlock.jpg")';
                blok.style.backgroundSize = 'cover';
            } else {
                blok.style.backgroundImage = 'url("graphics/transparentBlock.png")';
            }
            gamePanel.appendChild(blok);
        }
    }
}
drawMap();

var player = ["front", 433, 400]; 
var playerArea;
var scoreArea;

function createPlayer() {
    playerArea = document.createElement("div");
    playerArea.style.position = "absolute";
    playerArea.style.height = "250px";
    playerArea.style.width = "120px";
    playerArea.style.top = player[1] + "px"; 
    playerArea.style.left = player[2] + "px"; 
    playerArea.style.backgroundImage = 'url("graphics/steveFront.png")'; 
    playerArea.style.backgroundSize = "cover";
    playerArea.style.transition = "transform 0.05s linear";
    gamePanel.appendChild(playerArea);
}
createPlayer();

let score = 0;

function createScore(){
    scoreArea = document.createElement("div");
    scoreArea.setAttribute("class", "scoreArea");
    scoreArea.innerHTML = score;
    gamePanel.appendChild(scoreArea);
}

createScore();

document.addEventListener("keydown", function(event){
    if (event.key == "d") {
        if(player[2] >= 985){
            return;
        } else{
            player[2] += 50;
            console.log("x: " + player[2]);
            playerArea.style.transform = `translateX(${player[2]}px)`;
        }
    }
    if (event.key == "a") {
        if(player[2] <= -380){
            return;
        }
            player[2] -= 65;
            console.log("x: " + player[2]);
            playerArea.style.transform = `translateX(${player[2]}px)`;
    }
});
 
var itemImages = ["diamond.png", "gold.png"];
var items = [];

function createItem() {
    const newItem = [ itemImages[Math.floor(Math.random() * 2)], 0, Math.floor(Math.random() * 1400), document.createElement("div") ];

    newItem[3].setAttribute("class", "itemArea");
    newItem[3].style.backgroundImage = `url(graphics/items/${newItem[0]})`;
    newItem[3].style.left = newItem[2] + "px";
    newItem[3].style.top = newItem[1] + "px";

    gamePanel.appendChild(newItem[3]);
    items.push(newItem);
    setTimeout(createItem, 1000);
}

function fallItems() {
    for (let i = items.length - 1; i >= 0; i--) {
        items[i][1] += 6;
        items[i][3].style.top = items[i][1] + "px";
        if (items[i][1] > 800) {
            gamePanel.removeChild(items[i][3]);
            items.splice(i, 1);
        }
    }
    
    setTimeout(fallItems, 16);
}

function checkCollision() {
    const playerWidth = 120;
    const playerHeight = 250;
    const playerLeft = player[2]; 
    const playerTop = player[1]; 

    for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const itemLeft = item[2]; 
        const itemTop = item[1]; 
        const itemSize = 50; 

        if (playerLeft < itemLeft + itemSize && playerLeft + playerWidth > itemLeft && playerTop < itemTop + itemSize && playerTop + playerHeight > itemTop) {
            
            gamePanel.removeChild(item[3]);
            items.splice(i, 1);
            
            score++;
            scoreArea.innerHTML = score;
        }
    }
    
    setTimeout(checkCollision, 16);
}

createItem();
fallItems();
checkCollision();
