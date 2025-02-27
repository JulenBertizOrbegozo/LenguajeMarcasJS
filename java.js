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
function formPais() {
    let valor = document.getElementById("country").value;
    let comunidadDiv = document.getElementById("comunidadess");
    if (valor === "Spain") {
        comunidadDiv.style.display = "block";
    } else {
        comunidadDiv.style.display = "none";
        document.getElementById("city").style.display = "none"; // Ocultar city si no es Spain
    }
}

function formComunidad() {
    let valor = document.getElementById("comunity").value;
    if (valor === "Navarra") {
        document.getElementById("city").style.display = "block";
    } else {
        document.getElementById("city").style.display = "none";
    }
}
function validateForm() {
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^@]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    let messageElement = document.getElementById("email-message");

    if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.id = "email-message";
        document.getElementById("formulario").insertBefore(messageElement, document.getElementById("validate-button"));
    }

    if (emailPattern.test(email)) {
        messageElement.textContent = "Email válido";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Email inválido";
        messageElement.style.color = "red";
    }
}


/*FOR Images*/
document.querySelector("button").addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    const randomImage = document.getElementById("randomImage");

    switch (randomNum) {
        case 1: randomImage.src = "img1.jpg"; break;
        case 2: randomImage.src = "img2.jpg"; break;
        case 3: randomImage.src = "img3.jpg"; break;
        case 4: randomImage.src = "img4.jpg"; break;
        case 5: randomImage.src = "img5.jpg"; break;
    }
});
