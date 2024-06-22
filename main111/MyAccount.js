var login = localStorage.getItem("Login");
document.getElementById("LL").innerHTML = login ;
function OnClickNazad(){
    window.location.href = "mainHTT.html";
}
function Change(){
    window.location.href = "Change.html"; 
}
function Save(loginn){
    login = loginn;
    localStorage.setItem("Login",login.toString());
}

