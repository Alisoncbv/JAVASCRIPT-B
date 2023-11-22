let progreso = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;

let tiempo = setInterval(() => {
    avance += 1;

    //Aplicar estilo al ancho de la barra de progreso
    progreso.style.width = `${avance}%` 

    if (avance === 100) {
        //El intervalo para en tiempo = 100
        clearInterval(tiempo)

        //Agregar clase
        celebracion.classList.add("celebracion")
    }
    //Registrar como avanza
    porcentaje.textContent = `${avance}%`
    //Avanzar cada 75 milisegundos
}, 75);
