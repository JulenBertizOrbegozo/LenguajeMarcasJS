/*FOR ALL PAGES*/
document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    const body = document.body;

    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});

/*FOR PERSONALIZAR*/
function cambiarColor(color) {
    document.getElementById('contenedorMain').style.color = color;
}
function cambiarTamanio(tamaño){
    document.getElementById('contenedorMain').style.fontSize = tamaño;
}
function cambiarFuente(fuente){
    document.getElementById('contenedorMain').style.fontFamily = fuente;
}
function cambiarFondo(color1, color2, color3){
    document.body.style.color = rgb(color1, color2, color3);
}
function desplegar() {
    let div = document.getElementById("desplegable");

    if (div.style.height === "0px" || div.style.height === "") {
        div.style.height = div.scrollHeight + "px";
        div.style.padding = "10";
    } else {
        div.style.height = "0px";
        div.style.padding = "0px"
    }
}
function cambiarFondo(r, g, b) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("nav").style.backgroundColor = "#333"; 
    document.getElementById("desplegable").style.backgroundColor = "white";
}



/*FOR FORM*/
function formPais(){
    let valor = document.getElementById("country").value;
    let altura = document.getElementById("comunidades").height;
    if (valor === "Spain"){
        document.getElementById("comunidades").style.display = "block";
    } else {
        document.getElementById("comunidades").style.display = "none";
    }
}