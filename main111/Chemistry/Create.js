var tt = "";
var list = "";
var lint = 0;
var count = false;
var namee = "";
list = localStorage.getItem("list");
for(let i = 0;i<list.length;i++){
    if(list[i]=="1")
        count = true;
    if(list[i]==2||list[i]==3||list[i]==4||list[i]==5||list[i]==6||list[i]==7||list[i]==8||list[i]==9||list[i]==0 && count){
        count = false;
        break;
    }
    if(count)
        namee += list[i];
}
document.getElementById("name").innerHTML = namee ;
document.getElementById("q1").innerHTML = localStorage.getItem("list") ;
document.getElementById("q11").innerHTML = localStorage.getItem("list") ;
document.getElementById("q12").innerHTML = localStorage.getItem("list") ;
document.getElementById("q13").innerHTML =  localStorage.getItem("list");
document.getElementById("q14").innerHTML = localStorage.getItem("list") ;

function Save11(name){
    list = localStorage.getItem("list");
    lintl = localStorage.getItem("lint");
    for(let i = lintl.length-1;i>0;i--){
        if(lintl[i]=="1"){
            lint +=10**i *1;
        }
        if(lintl[i]=="2"){
            lint +=10**i *2;
        }
        if(lintl[i]=="3"){
            lint +=10**i *3;
        }
        if(lintl[i]=="4"){
            lint +=10**i *4;
        }
        if(lintl[i]=="5"){
            lint +=10**i *5;
        }
        if(lintl[i]=="6"){
            lint +=10**i *6;
        }
        if(lintl[i]=="7"){
            lint +=10**i *7;
        }
        if(lintl[i]=="8"){
            lint +=10**i *8;
        }
        if(lintl[i]=="9"){
            lint +=10**i *9;
        }
    }
    list.push(lint + name);
    lint++;
    localStorage.setItem("list",list);
    localStorage.setItem("lint",lint);

    
}
function Save(name , data){
    alert(name + " " + data);
    localStorage.setItem(name,data);
}
