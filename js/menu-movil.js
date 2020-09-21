//Animación smooth
var scroll = new SmoothScroll('a[href*="#"]');

//Menú Móvil
//---------

//variables
var degradado = document.getElementById('degradado');
var menuMovil = document.getElementById('menu-movil');
var btnMenu = document.getElementById('btn-menu');
var btnSalida = document.getElementById('btn-salida');
var enlaces = document.getElementsByClassName('enlaces');

//Eventos
btnMenu.addEventListener('click', mostrar);
btnSalida.addEventListener('click', salir);
document.addEventListener('keyup', filtrarTecla);
for(var i = 0; i in enlaces; i++){
    enlaces[i].addEventListener('click', salir);
}

//Funciones
function mostrar(){
    if(menuMovil.className == 'menu-movil inactivo'){
        degradado.style.display = 'block';
        setTimeout(()=>{
            degradado.style.opacity = '1';
            menuMovil.className = 'menu-movil activo';
        }, 10);
    }
}

function filtrarTecla(item){
    if(item.keyCode === 27){
        salir();
    }
}

function salir(){
    degradado.style.opacity = '0';
    menuMovil.className = 'menu-movil inactivo';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 500);
}