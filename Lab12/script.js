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

function del(id){
    window.location.href = "delete.php?id=" + id;
}

function logOut(){
    window.location.href = "logout.php";
}

function logIn(){
    window.location.href = "login";
}

function register(){
    window.location.href = "register";
}

function show(id){
    upperPanel.style.filter = 'blur(10px)';
    middlePanel.style.filter = 'blur(10px)';
    bottomPanel.style.filter = 'blur(10px)';
    document.getElementById(id).style.display = 'flex';
}

function closeView(id){
    console.log("jd");
    upperPanel.style.filter = 'blur(0px)';
    middlePanel.style.filter = 'blur(0px)';
    bottomPanel.style.filter = 'blur(0px)';
    document.getElementById(id).style.display = 'none';
}