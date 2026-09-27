/* Lógica del Componente */

// Función con parametros: ID, el título y el texto.
function crearAcordeon(idContenedor, titulo, texto) {
    
    var contenedorPadre = document.getElementById(idContenedor);

    var cajaPrincipal = document.createElement("div");
    cajaPrincipal.className = "acordeon-caja";

    var botonTitulo = document.createElement("button");
    botonTitulo.className = "acordeon-boton";

    botonTitulo.innerHTML = titulo + " ▼";

    var cajaContenido = document.createElement("div");
    cajaContenido.className = "acordeon-contenido";
    
    var parrafo = document.createElement("p");
    parrafo.innerText = texto;

    cajaContenido.appendChild(parrafo);
    cajaPrincipal.appendChild(botonTitulo);
    cajaPrincipal.appendChild(cajaContenido);
    
    contenedorPadre.appendChild(cajaPrincipal);
    
    botonTitulo.addEventListener("click", function() {
        // Esto hace que el acordeon se abra y se cierre con cada clic.
        cajaPrincipal.classList.toggle("acordeon-abierto");
    });
}