let hr = mn = seg = ms = "0" + 0, iniciarTiempo;

const botonIniciar = document.querySelector('.iniciar');
const botonDetener = document.querySelector('.detener');
const botonReiniciar = document.querySelector('.reiniciar');

botonIniciar.addEventListener('click', iniciar);
botonDetener.addEventListener('click', detener);
botonReiniciar.addEventListener('click', reiniciar);

function iniciar(){
    botonIniciar.classList.add('on');

    iniciarTiempo = setInterval(() => {
        ms++;
        ms = ms < 10 ? '0' + ms : ms;

        if (ms == 100) {
            seg++;
            seg = seg < 10 ? '0' + seg : seg;
            ms = '0' + 0;
        }

        if (seg == 60) {
            mn++;
            ms = ms < 10 ? '0' + ms : ms;
            seg = '0' + 0;
        }

        if (mn == 60) {
            hr++
            hr = hr < 10 ? '0' + hr : hr;
            mn = '0' + 0;
        }
    
        ingresarValor();

    }, 10 )
}

function detener(){
    botonIniciar.classList.remove('on');
    //Detener intervalo
    clearInterval(iniciarTiempo);
}

function reiniciar(){
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);

    hr = mn = seg = ms = '0' + 0;

    ingresarValor();
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = seg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}