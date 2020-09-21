//variables
var menu = document.getElementById('menu');
var posicionAnterior = window.pageYOffset;

//Evento
setTimeout(()=>{
    document.addEventListener('scroll', esconderMenu);
}, 50)

//Funciones
function iniciarMenu(){
    setTimeout(()=>{
        menu.style.top = '0';
    }, 30)
}

function esconderMenu(){
    posicionActual = window.pageYOffset;

    if(posicionActual < posicionAnterior){
        menu.style.top = '0px';
    } else {
        menu.style.top = '-90px';
    }

    posicionAnterior = posicionActual;
}

iniciarMenu();