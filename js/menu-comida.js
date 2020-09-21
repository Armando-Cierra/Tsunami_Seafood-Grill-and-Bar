if(document.getElementById('menu-comida')){
//variables
var menu = document.getElementById('menu');
var menuComida = document.getElementById('menu-comida');
var posicionAnterior = window.pageYOffset;
var header = document.getElementById('header-uno');

//Evento
document.addEventListener('scroll', esconderMenu);

//Funciones
function iniciarMenu(){
    setTimeout(function(){
        menu.style.top = '0';
    }, 30)
}
iniciarMenu();

//Menu Escritorio
function esconderMenu(){
    posicionActual = window.pageYOffset;

    if(posicionActual <= posicionAnterior){
        menu.style.top = '0px';
        menuComida.style.top = '90px';
    } else {
        menu.style.top = '-90px';
        menuComida.style.top = '0';
    }

    posicionAnterior = posicionActual;
}
}