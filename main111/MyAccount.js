
var login = localStorage.getItem("Login");
document.getElementById("LL").innerHTML = login ;
function OnClickNazad(){
    window.location.href = "mainHTT.html";
}
function OnClickNazad1(){
    window.location.href = "MyAccount.html";
}
function Reg(){
    window.location.href = "registration.html"
}
function Change(){
    window.location.href = "Change.html"; 
}
function Save(){
    login = document.getElementById("login").value;
    localStorage.setItem("Login",login.toString());
    window.location.href = "mainHTT.html";
}

