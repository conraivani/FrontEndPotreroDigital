// function modonocturno() {
//     document.body.style.backgroundColor= "black";
//     document.getElementById("body").style.backgroundColor = "black";
//     document.getElementById("body").style.backgroundImage = "none";
//     document.getElementById("body").style.color = "white";
//     document.getElementById("main").style.backgroundColor = "black";
//     document.getElementById("main").style.color = "white";
//     document.getElementById("header").style.backgroundColor = "black";
//     document.getElementById("header").style.color = "white";
//     document.getElementById("nav").style.backgroundColor = "black";
//     document.getElementById("nav").style.color = "white";
//     document.getElementById("section").style.backgroundColor = "black";
//     document.getElementById("section").style.color = "white";
//     document.getElementById("aside").style.backgroundColor = "black";
//     document.getElementById("aside").style.color = "white";
//     document.getElementById("footer").style.backgroundColor = "black";
//     document.getElementById("footer").style.color = "white";
    
    
// }
JavaScript
 
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}

function derechos() {
    document.getElementById("creador").innerHTML = "Todos los derechos reservados ® Conrado Ivani 2022"
}

function AmpliarImg(x) {
    x.style.height = "125%";
    x.style.width = "125%";
}

function NormalImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
}