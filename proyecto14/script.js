const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

//Establecer maximo de caracteres, tamaño de arrays
const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

//Arreglos 
let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];

inputTarjeta.addEventListener("keydown", (e) =>{
    if(e.key === "Tab"){
        return;
    }
    //Para solo recibir números 
    e.preventDefault();

    //Llamar función ingreso de datos
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    inputTarjeta.value = TarjetaNumero.join("");
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join("")
})

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join("")
})

//Función de ingrese de datos
function ingresoDatos(mascara, key, arreglo){
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(key === "Backspace" && arreglo.length > 0){
        //Eliminar dato de arreglo
        arreglo.pop();
        return;
    }

    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/"){
            //Agregar al arreglo correspondiente 
            arreglo.push(mascara[arreglo.length], key);

        }else{
            arreglo.push(key);
        }
    }

}


