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
function cambiarImagen() {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    document.getElementById("dinamica").src = `img/img${randomNum}.jpg`;
}

function rotarImagenes() {
    let div = document.getElementById("automatica");
    let num = 1; 

    setInterval(() => {
        if (num === 5) {
            num = 1; 
        } else {
            num++; 
        }

        switch (num) {
            case 1:
                div.style.backgroundImage = "url('img/img1.jpg')";
                break;
            case 2:
                div.style.backgroundImage = "url('img/img2.jpg')";
                break;
            case 3:
                div.style.backgroundImage = "url('img/img3.jpg')";
                break;
            case 4:
                div.style.backgroundImage = "url('img/img4.jpg')";
                break;
            case 5:
                div.style.backgroundImage = "url('img/img5.jpg')";
                break;
        }
    }, 500); 
}

window.onload = rotarImagenes;
