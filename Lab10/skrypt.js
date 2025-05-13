var dir = "data/";
var asyncRequest;

function showBio(person) {
    try {
        asyncRequest = new XMLHttpRequest();
        asyncRequest.onreadystatechange = loadBio;
        asyncRequest.open('GET', dir + person + '.html', true);
        asyncRequest.send(null);
    } catch (Exception) {
        alert("Nie załadowano pliku");
    }
}

function loadBio() {
    var text = document.getElementById("text"); 
    var img = document.getElementById("img");

    if (text && asyncRequest.readyState === 4 && asyncRequest.status === 200) {
        var response = asyncRequest.responseText;

        var textStart = response.indexOf("<p>");
        var textEnd = response.indexOf("</p>") + 4;
        var bio = response.substring(textStart, textEnd);

        var imgStart = response.indexOf('src="') + 5;
        var imgEnd = response.indexOf('"', imgStart);
        var imgSrc = response.substring(imgStart, imgEnd);

        text.innerHTML = bio;
        img.src = imgSrc;
        applyStyle(img);
    }
}

function applyStyle(imgStyl){
    imgStyl.style.animation = "none";
    setTimeout(() => {
        imgStyl.style.animation = "in 1s forwards";
    }, 10); 
}
