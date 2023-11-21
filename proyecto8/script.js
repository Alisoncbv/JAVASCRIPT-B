let noelPlay = document.getElementById("boton1");
let noelStop = document.getElementById("boton2");
let bailarNoel = document.getElementById("bailar")
let bailarMusica = new Audio ("C:/Users/LENOVO/Downloads/Navidad/audio/allWant.mp3")

function obtenerTiempoFaltante(fechaLimite) {

    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) /1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        tiempoFaltante,
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes
    }
};

console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante, dia, hora, minuto, segundo, mensaje){
    const d = document.getElementById(dia);
    const h = document.getElementById(hora);
    const m = document.getElementById(minuto);
    const s = document.getElementById(segundo);

    const tiempoActual = setInterval( ()=>{

        let t = obtenerTiempoFaltante(tiempoFaltante);

        d.innerHTML = t.diasFaltantes;
        h.innerHTML = t.horasFaltantes;
        m.innerHTML = t.minutosFaltantes;
        s.innerHTML = t.segundosFaltantes;

        if (t.tiempoFaltante <=1) {

            clearInterval(tiempoActual)

            c = document.getElementById('mensaje')
            c.innerHTML=mensaje

            d.innerHTML = '00';
            h.innerHTML = '00';
            m.innerHTML = '00';
            s.innerHTML = '00';

            bailarNoel.classList.add("on");
            noelPlay.classList.add("color");
            noelStop.classList.add("color")

        }
    }, 1000);

}
cuentaRegresiva('Nov 15 2023 22:21:00 GMT-0500', 'dia', 'hora', 'minuto', 'segundo', 'Feliz Navidad');

function bailaPapaNoel(){
    bailarMusica.play();
}
function detentePapaNoel() {
    bailarMusica.pause();
}