// function bienvenida() {alert("Bienvenidos a mi sitio web")}

function modonocturno() {
    document.body.style.backgroundColor= "black";
    document.getElementById("main").style.backgroundColor = "black";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.color = "#90ffe9";
    document.getElementById("nav").style.backgroundColor = "whitesmoke";
    document.getElementById("nav").style.color = "black";
    document.getElementById("section").style.backgroundColor = "black";
    document.getElementById("section").style.color = "whitesmoke";
    document.getElementById("aside").style.backgroundColor = "black";
    document.getElementById("footer").style.backgroundColor = "black";
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