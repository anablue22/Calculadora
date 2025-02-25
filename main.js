const pantalla = document.querySelector(".resultado"); // Selecciona la pantalla
const botones = document.querySelectorAll(".button"); // Selecciona todos los botones

botones.forEach(boton => { 
    boton.addEventListener("click", () => { // Itera sobre cada botón
        const botonOprimir = boton.textContent;

        // Manejo del botón C (limpiar pantalla)
        if (boton.id === "c") {
            pantalla.textContent = "0"; 
            return;
        }

        // Manejo del botón borrar (eliminar último carácter)
        if (boton.id === "borrar") {
            pantalla.textContent = (pantalla.textContent.length === 1 || pantalla.textContent === "Error") 
                ? "0" 
                : pantalla.textContent.slice(0, -1);
            return;
        }

        // Manejo del botón igual (evaluar expresión sin `eval()`)
        if (boton.id === "igual") {
            try {
                pantalla.textContent = calcularExpresion(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }
            return; 
        }

        // Manejo de otros botones (agregar números y operadores)
        pantalla.textContent = (pantalla.textContent === "0" || pantalla.textContent === "Error") 
            ? botonOprimir 
            : pantalla.textContent + botonOprimir;
    }); 
});

/* Función para evaluar la expresión matemáticamente sin `eval()` */
function calcularExpresion(expresion) {
    return new Function('return ' + expresion)();
}   