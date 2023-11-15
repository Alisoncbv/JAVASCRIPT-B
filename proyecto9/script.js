//Acumula eventos
let eventos = [];

//Administrar local store
let arr = [];

const nombreEvento = document.querySelector("#nombreEvento");
const fechaEvento = document.querySelector("#fechaEvento");
const botonAgregar = document.querySelector("#agregar");
const listaEventos = document.querySelector("#listaEventos");

//
const json = cargar();

try{
    arr = JSON.parse(json);
}catch (error) {
    arr = [];
}
//Llenar arr de eventos 
eventos = arr? [...arr] : [];

mostrarEventos();

document.querySelector("form").addEventListener("submit", e =>{
    //Deja el formulario en blanco
    e.preventDefault();
    //Función para agregar el evento
    agregarEvento();
})

function agregarEvento() {
    //Valida que los campos no esten vacios
    if (nombreEvento.value === "" || fechaEvento.value === ""){
        //Retorna vacio
        console.log("Campos vacios");
        return;
    };

    //Valida que la fecha no sea inferior a la actual 
    if (diferenciaFecha(fechaEvento.value) < 0){
        console.log("La fecha no es valida");
        return;
    };

    //Json de eventos
    const nuevoEvento = {
        id: (Math.random() * 100).toString(36).slice(3),
        nombre: nombreEvento.value,
        fecha: fechaEvento.value,
    };

    //Guardar en el arreglo evento
    eventos.unshift(nuevoEvento);
    //Guardar eventos en el local
    guardar(JSON.stringify(eventos));

    //Campo en blanco para crear e siguiente evento
    nombreEvento.value = "";
    fechaEvento.value = "";

    //Mostrar eventos 
    mostrarEventos();
}

//Funcion diferencia de fecha, parametro destino; fecha del usuario
function diferenciaFecha(destino) {
    let fechaDestino = new Date(destino);
    let fechaActual = new Date();

    //Restar fecha actual al fecha de destino
    let diferencia = fechaDestino.getTime() - fechaActual.getTime();

    //Convertir milisegundos en dias 
    let dias = Math.ceil(diferencia / (1000 * 3600 * 24));

    return dias;
}

//Funcion para mostrar los eventos
function mostrarEventos(){
    //Mostrar array ("dibujar array")
    const eventosHTML = eventos.map((evento) =>{
        return ` 
            <div class="evento">
                <div class="dias">
                    <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>
                    <span class="texto">días para</span>
                </div>

                <div class="nombreEvento">${evento.nombre}</div>
                <div class="fechaEvento">${evento.fecha}</div>

                <div class="acciones">
                    <button data-id="${evento.id}" class="eliminar">Eliminar</button>
                </div>
            </div>
        `;

    });

    listaEventos.innerHTML = eventosHTML.join();

    document.querySelectorAll('.eliminar').forEach(button => {
        button.addEventListener("click", e =>{
            const id = button.getAttribute('data-id');
            //Filtra para seleccionar el id elegido
            eventos = eventos.filter(evento => evento.id !== id);

            //Eliminar evento del local
            guardar(JSON.stringify(eventos));
            mostrarEventos();

            mostrarEventos();
        });
    });

    
}

//Guardar los eventos que queden en la lista
function guardar(datos){
    localStorage.setItem("lista", datos);
}

//Traer lo que tiene guardado el local
function cargar(){
    return localStorage.getItem("lista");
}