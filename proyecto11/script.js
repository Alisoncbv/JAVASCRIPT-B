const body = document.querySelector("body");
const toggle =document.getElementById("toggle");

//Toggle por defecto off 
toggle.addEventListener('click', () =>{
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})