var upperPanel = document.getElementById("up");
var middlePanel = document.getElementById("mp");
var bottomPanel = document.getElementById("bp");
var adderPanel = document.getElementById("adder");

function add(){
    upperPanel.style.filter = 'blur(10px)';
    middlePanel.style.filter = 'blur(10px)';
    bottomPanel.style.filter = 'blur(10px)';
    adderPanel.style.display = 'flex';
}

function close(){
    upperPanel.style.filter = 'blur(0px)';
    middlePanel.style.filter = 'blur(0px)';
    bottomPanel.style.filter = 'blur(0px)';
    adderPanel.style.display = 'none';
}

function del(id){
    window.location.href = "delete.php?id=" + id;
}