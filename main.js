const pantalla = document.querySelector(".resultado"); /*selecciona la pantalla*/
const botones = document.querySelectorAll(".button"); /*selecciona todos los botones cuentan con esa clase*/

botones.forEach(boton => { 
    boton.addEventListener("click", () => { /*itera sobre cada btón*/

        const botonOprimir = boton.textContent;

        /*Manejo del botón C*/
        if(boton.id === "c"){ /*Con este siempre se va a poner 0 cuando se de a la C*/
            pantalla.textContent = "0"; 
            return;
        }

        /*Manejo del botón borrar*/
        if(boton.id === "borrar" ){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); /* se elimina el último elemento impreso en la pantalla */
        }
        return;
    }
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent); /*quiero que me muestre la evaluación de lo mostrado en la pantalla*/
            } catch {
                pantalla.textContent = "Error";
            } return; 
        } /*Estoy usando try y catch para manejar posibles errores de la expresión matemática en la pantalla*/

        /*Manejo con otros botones*/
        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){/*En cualquiera de estos casos, quiero que la pantalla muestre el botón que orimo*/
            pantalla.textContent = botonOprimir;
        }else {
            pantalla.textContent += botonOprimir;
        }
    }) 
})
     