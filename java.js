document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    const body = document.body;

    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
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
function desplegar(){

}